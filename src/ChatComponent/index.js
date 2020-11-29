import React, {FC, useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  TouchableWithoutFeedback,
  ImageBackground,
  RecyclerViewBackedScrollView,
  Linking,
  Clipboard,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Styles from './styles';

const ChatComponent = ({
  data,
  onClickVideo,
  onClickDocument,
  onClickLocation,
  textInputShow,
  textInputPlaceholder,
  onSend,
  chatColor,
  user,
  onSystemMessage,
  onDeleteMessage,
  onfavoriteMessage,
  onPostClick,
  PostButtonView,
  tickViewShow,
  quickRepliesRightColor,
  quickRepliesLeftColor,
  onQuickReplies,
  backgroundImage,
  writing,
}) => {
  const [text, setText] = useState();
  const [item, setItem] = useState();
  const [messageState, setMessageState] = useState(false);
  const [messagePosition, setMessageposition] = useState();
  const [imageShowState, setImageShowState] = useState(false);
  const [postShowState, setpostShowState] = useState(false);
  const [showItemImage, setShowItemImage] = useState();

  const tickView = (tick) => {
    if (!tickViewShow) return null;
    if (tick === '0') return null;
    else if (tick == 1) return <IconMCI color={'white'} name="alarm-check" />;
    else if (tick == 2) return <IconMCI color={'white'} name="check" />;
    else if (tick == 3) return <IconMCI color={'white'} name="check-all" />;
    else if (tick == 4) return <IconMCI color={'#42fb05'} name="check-all" />;
  };
  const imageView = (image) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setShowItemImage(image);
          setImageShowState(!imageShowState);
          setMessageState(false);
        }}>
        <Image style={Styles.image} source={{uri: image}} />
      </TouchableOpacity>
    );
  };
  const imagesView = (images) => {
    return (
      <FlatList
        style={Styles.imagesFlatList}
        data={images}
        numColumns={2}
        renderItem={(item) => (
          <TouchableOpacity
            key={item.item.id}
            style={Styles.imagesButton}
            onPress={() => {
              setShowItemImage(item.item.image);
              setImageShowState(!imageShowState);
              setMessageState(false);
            }}>
            <Image style={Styles.images} source={{uri: item.item.image}} />
          </TouchableOpacity>
        )}
      />
    );
  };

  const imageShow = () => {
    return (
      <TouchableWithoutFeedback onPress={() => setImageShowState(false)}>
        <View style={Styles.imageShowContainer}>
          <Image
            resizeMode="contain"
            style={Styles.showImage}
            source={{uri: showItemImage}}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  };
  const quickRepliesView = (quickReplies,position) => {
    return (
      <View style={Styles.quickRepliesContainer}>
        {quickReplies.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onQuickReplies(item)}
            style={[Styles.quickRepliesButton, {borderColor:position=='left'?quickRepliesLeftColor:quickRepliesRightColor}]}>
            <Text style={[Styles.quickRepliesText, {color: position=='left'?quickRepliesLeftColor:quickRepliesRightColor}]}>
              {item.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  const messageSettings = () => {
    return (
      <TouchableWithoutFeedback onPress={() => setMessageState(false)}>
        <View style={Styles.messageSettingsContainer}>
          {messagePosition == 'r' ? rightView(item) : leftView(item)}
          <View
            style={[
              Styles.settingsContainer,
              {backgroundColor: messagePosition == 'r' ? '#1cafff' : 'white'},
            ]}>
            <TouchableOpacity
              onPress={() => {
                onfavoriteMessage(item);
                setMessageState(false);
              }}
              style={Styles.settingButton}>
              <Text
                style={[
                  Styles.settingButtonText,
                  {color: messagePosition == 'r' ? 'white' : '#979797'},
                ]}>
                Yıldız
              </Text>
              <AntDesign
                style={Styles.settingButtonIcon}
                color={messagePosition == 'r' ? 'white' : '#979797'}
                name="star"
              />
            </TouchableOpacity>
            {item.text ? (
              <TouchableOpacity
                onPress={() => {
                  Clipboard.setString(item.text);
                  setMessageState(false);
                }}
                style={Styles.settingButton}>
                <Text
                  style={[
                    Styles.settingButtonText,
                    {
                      color: messagePosition == 'r' ? 'white' : '#979797',
                    },
                  ]}>
                  Metin Kopyala
                </Text>
                <AntDesign
                  style={Styles.settingButtonIcon}
                  color={messagePosition == 'r' ? 'white' : '#979797'}
                  name="link"
                />
              </TouchableOpacity>
            ) : null}

            <TouchableOpacity
              onPress={() => {
                onDeleteMessage(item);
                setMessageState(false);
              }}
              style={[Styles.settingButton, {borderBottomWidth: 0}]}>
              <Text style={[Styles.settingButtonText, {color: '#FC4A4A'}]}>
                Sil
              </Text>
              <IconMCI
                style={Styles.settingButtonIcon}
                color={'#FC4A4A'}
                name="delete"
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  const postView = () => {
    return (
      <TouchableWithoutFeedback onPress={() => setpostShowState(false)}>
        <View style={Styles.postContainer}>
          <View style={Styles.postItemsContainer} />
        </View>
      </TouchableWithoutFeedback>
    );
  };
  const videoView = (item) => {
    return (
      <TouchableOpacity onPress={() => onClickVideo(item.video)}>
        <View style={Styles.video}>
          {user.id == item.user._id ? (
            <AntDesign name="play" size={30} color="white" />
          ) : (
            <AntDesign name="play" size={30} color="rgba(0,0,0,.7)" />
          )}
        </View>
      </TouchableOpacity>
    );
  };
  const documentView = (item) => {
    return (
      <TouchableOpacity
        onPress={() => {
          const url = JSON.parse(item.documents).path;
          onClickDocument(url);
        }}
        style={Styles.documentContainer}>
        {item.user._id == user.id ? (
          <>
            <IconMCI name="file-document" size={30} color="white" />
            <Text style={{color: 'white'}}>Dosyayı Aç</Text>
          </>
        ) : (
          <>
            <IconMCI name="file-document" size={30} color="rgba(0,0,0,.7)" />
            <Text style={{color: 'rgba(0,0,0,.7)'}}>Dosyayı Aç</Text>
          </>
        )}
      </TouchableOpacity>
    );
  };
  const locationView = (item) => {
    return (
      <TouchableOpacity
        onPress={() => {
          let location = JSON.parse(item.location);
          onClickLocation(location);
        }}>
        <View style={Styles.location}>
          {user.id == item.user._id ? (
            <FontAwesome5 name="map-marked-alt" size={30} color="white" />
          ) : (
            <FontAwesome5
              name="map-marked-alt"
              size={30}
              color="rgba(0,0,0,.7)"
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };
  const systemShow = (item) => {
    console.log('system girdi');
    return (
      <View style={Styles.bubbleContainer}>
        <View style={Styles.flex} />
        <TouchableOpacity
          onPress={() =>
            item.systemData
              ? onSystemMessage(item.systemData)
              : onSystemMessage('not systemData')
          }
          style={Styles.systemViewContainer}>
          <Text style={Styles.systemText}>{item.text}</Text>
        </TouchableOpacity>
        <View style={Styles.flex} />
      </View>
    );
  };

  const leftView = (item: any) => {
    return (
      <TouchableWithoutFeedback
        onLongPress={() => {
          setItem(item);
          setMessageposition('l');
          setMessageState(!messageState);
        }}
        onPress={() => setMessageState(false)}>
        <View style={Styles.bubbleContainer}>
          <View
            style={[
              Styles.bubleItemContainer,
              {backgroundColor: 'white', marginRight: 10},
            ]}>
            <View style={Styles.flex} />
            {item.image
              ? imageView(item.image)
              : item.images
              ? imagesView(item.images)
              : null}

            {item.documents ? documentView(item) : null}
            {item.video ? videoView(item) : null}
            {item.location ? locationView(item) : null}
            <Text style={[Styles.bubleText, {color: '#959494'}]}>
              {item.text}
            </Text>
            {item.quickReplies ? quickRepliesView(item.quickReplies,'left') : null}
            <View style={Styles.infoContainer}>
              <View style={Styles.flex} />

              <Text style={[Styles.timeText, {color: '#959494'}]}>
                {item.createdAt}
              </Text>
              {item.annoucement ? (
                <Foundation
                  name={'megaphone'}
                  style={Styles.infoItem}
                  color={'rgba(0,0,0,.3)'}
                />
              ) : null}
              {item.favorite ? (
                <AntDesign
                  style={Styles.messageStar}
                  color={'#FCDE08'}
                  name="star"
                />
              ) : null}
            </View>
          </View>
          <View style={Styles.flex} />
        </View>
      </TouchableWithoutFeedback>
    );
  };
  const rightView = (item: any) => {
    return (
      <TouchableWithoutFeedback
        onLongPress={() => {
          setItem(item);
          setMessageposition('r');
          setMessageState(!messageState);
        }}
        onPress={() => setMessageState(false)}>
        <View style={Styles.bubbleContainer}>
          <TouchableWithoutFeedback onPress={() => setMessageState(false)}>
            <View style={Styles.flex} />
          </TouchableWithoutFeedback>
          <View
            style={[
              Styles.bubleItemContainer,
              {backgroundColor: '#1cafff', marginRight: 10},
            ]}>
            {item.transmitted ? (
              <View style={Styles.transmittedContainer}>
                <AntDesign
                  style={Styles.settingButtonIcon}
                  color={'white'}
                  name="arrowright"
                />
                <Text style={Styles.transmittedText}>iletildi</Text>
              </View>
            ) : null}
            {item.image
              ? imageView(item.image)
              : item.images
              ? imagesView(item.images)
              : item.image_link
              ? imageView(item.image_link)
              : null}

            {item.documents ? documentView(item) : null}
            {item.video ? videoView(item) : null}
            {item.location ? locationView(item) : null}
            <Text style={[Styles.bubleText, {color: 'white'}]}>
              {item.text}
            </Text>
            {item.quickReplies ? quickRepliesView(item.quickReplies,'right') : null}
            <View style={Styles.infoContainer}>
              {item.annoucement ? (
                <Foundation name={'megaphone'} color={'rgba(0,0,0,.3)'} />
              ) : null}
              {item.favorite ? (
                <AntDesign
                  style={Styles.messageStar}
                  color={'#FCDE08'}
                  name="star"
                />
              ) : null}

              <View style={Styles.flex} />
              <Text style={Styles.timeText}>{item.createdAt}</Text>
              {item.tick != undefined ? tickView(item.tick) : null}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <SafeAreaView style={Styles.container}>
      <ImageBackground style={Styles.container} source={backgroundImage}>
        <FlatList
          inverted={true}
          data={data}
          // pagingEnabled={true}
          style={Styles.flatList}
          renderItem={(item: any) => {
            return (
              <View key={item.item.id}>
                {item.item.system
                  ? systemShow(item.item)
                  : user.id === item.item.user._id
                  ? rightView(item.item)
                  : leftView(item.item)}
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
        {textInputShow ? (
          <View style={Styles.textInputFirstContainer}>
            {PostButtonView ? (
              <View style={Styles.postButtonContainer}>
                <TouchableOpacity onPress={() => onPostClick()}>
                  <View style={Styles.postButton}>
                    <IconMCI
                      color={'rgba(0,0,0,.2)'}
                      name="paperclip"
                      size={23}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            ) : null}
            <View style={Styles.textInputContainer}>
              <View style={Styles.textInput}>
                <TextInput
                  value={text}
                  onChangeText={(e) => setText(e)}
                  multiline={true}
                  placeholder={textInputPlaceholder}
                />
              </View>
            </View>
            <View style={Styles.sendButtonContainer}>
              <TouchableOpacity
                onPress={() => {
                  onSend([
                    {
                      text: text,
                    },
                  ]);
                  setText('');
                }}
                style={[
                  Styles.sendButton,
                  {backgroundColor: chatColor ? chatColor : 'black'},
                ]}>
                <IconMCI color={'white'} name="send" size={20} />
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
        {messageState ? messageSettings() : null}
        {imageShowState ? imageShow() : null}
        {postShowState ? postView() : null}
        {writing ? (
          <View style={Styles.writingContainer}>
            <Text style={Styles.writingText}>yazıyor...</Text>
          </View>
        ) : null}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ChatComponent;
