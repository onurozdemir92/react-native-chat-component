
import {StyleSheet, Dimensions} from 'react-native';
const h = Dimensions.get('screen').height;
const w = Dimensions.get('screen').width;
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    flex: 1,
  },
  textInputFirstContainer: {
    width: '100%',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    maxHeight: h * 0.2,
    backgroundColor: 'white',
  },
  postButtonContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  sendButtonContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textInputContainer: {
    flex: 1,
  },
  quickRepliesButton:{
    width:'80%',
    borderColor:'#ccc',
    borderWidth:1,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center',
    padding:5,
    marginTop:8
  },
  quickRepliesText:{

  },
  quickRepliesContainer:{
    alignItems:'center',
    justifyContent:'center'
      },
  writingContainer:{
backgroundColor:'white',
borderRadius:30,
position:'absolute',
top:10
,
left:10,
paddingHorizontal:10,
paddingVertical:5  },
writingText:{
color:'rgba(0,0,0,.5)'
},
  textInput: {},
  sendButton: {
    width: 35,
    height: 35,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginRight: 3,
  },
  postButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 3,
    marginRight: 5,
  },
  flex: {
    flex: 1,
  },
  bubbleContainer: {
    flexDirection: 'row',
    marginBottom: 3,
    marginTop:2,
    marginLeft: 10,
  },
  transmittedContainer: {
    flexDirection: 'row',
    alignItems:'center',
    paddingHorizontal:3
  },
  transmittedText:{
color:'white'
  },
  bubleItemContainer: {
    minWidth: '30%',
    maxWidth: '75%',
    
    borderRadius: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal:3,
    paddingVertical:1
  },
  timeText: {
    fontSize: 12,
    marginRight: 5,
    color: 'white',
  },
  bubleText: {
    textAlign: 'left',
    margin:5
  },
  systemText: {
    color: 'rgba(0,0,0,.5)',
    textAlign: 'center',
  },
  systemViewContainer: {
    width: '70%',
    paddingVertical: 5,
    backgroundColor: 'rgba(255,255,255,.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  postContainer: {
    position: 'absolute',
    width: w,
    height: h,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.93)',
  },
  documentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postItemsContainer: {
    width: '70%',
    height: 70,
    backgroundColor: 'white',
  },
  image: {
    width: w * 0.7,
    height: h * 0.3,
    borderRadius:5,
  },
  video: {
    width: w * 0.5,
    height: h * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  location: {
    width: w * 0.5,
    height: h * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  images: {
    width: '100%',
    height: 80,
    borderRadius:5
  },
  imagesButton: {
    width: '49%',
    marginBottom: 5,
    marginTop:1,
    marginRight: 5,
  },
  imagesFlatList: {
    width: '100%',
  },
  infoItem: {
    marginLeft: 5,
  },
  messageSettingsContainer: {
    position: 'absolute',
    width: w,
    height: h,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.93)',
  },
  imageShowContainer: {
    position: 'absolute',
    width: w,
    height: h,
    // backgroundColor: 'rgba(52, 52, 52, 0.93)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  showImage: {
    width: '100%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsContainer: {
    width: '40%',
    backgroundColor: '#1cafff',
    borderRadius: 10,
  },
  settingButton: {
    width: '100%',
    height: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  settingButtonText: {
    color: 'white',
    margin: 10,
  },
  settingButtonIcon: {
    marginRight: 10,
  },
  messageStar: {
    marginLeft: 5,
  },
});
export default Styles;
