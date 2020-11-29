# react-native-chat-component

<p align="center">
  <img src="https://user-images.githubusercontent.com/28515389/98550209-e06ea900-22ac-11eb-8570-782fd8e3dcc8.PNG">
</p>

## Installation

```bash
npm install --save react-native-chat-component

yarn add react-native-chat-component
```

## Example

```javascript
import React, {useEffect, useState} from 'react';
import {ChatComponent, ChatAppend} from 'react-native-chat-component';

const Example = () => {
  const firstData = [
    {
      id: 1,
      text: 'Hi!',
      tick: '1',
      transmitted: true,
      annoucement: true,
      favorite: true,
      createdAt: '20:15',
      user: {_id: 1},
    },
    {
      id: 1,
      text: 'Hi!',
      tick: '1',
      createdAt: '20:14',
      user: {_id: 2},
      quickReplies: [
        {text: 'Google', url: 'www.google.com'},
        {text: 'Facebook', url: 'www.facebook.com'},
      ],
    },
    {
      id: 1,
      text: '...',
      tick: '1',
      images: [
        {
          id: 1,
          image:
            'https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 1,
          image:
            'https://images.unsplash.com/photo-1441441247730-d09529166668?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 1,
          image:
            'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 1,
          image:
            'https://images.unsplash.com/photo-1541298645675-6cc8e127934d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        },
      ],
      createdAt: '20:13',
      user: {_id: 2},
      quickReplies: [
        {text: 'Google', url: 'www.google.com'},
        {text: 'Facebook', url: 'www.facebook.com'},
      ],
    },
    {
      id: 1,
      text: '...',
      tick: '4',
      image:
        'https://images.unsplash.com/photo-1462027076063-1ceabb252dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      favorite: true,
      createdAt: '20:13',
      user: {_id: 1},
    },
  ];
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(firstData);
  }, []);

  const onSend = (message) => {
    const newdata = {id: 2, text: message, tick: '1', user: {_id: 2}};
    setData(ChatAppend(data, newdata));
  };
  return (
    <ChatComponent
      PostButtonView={true}
      onSend={(Value) => onSend(Value[0].text)}
      tickViewShow={true}
      chatColor={'#1cafff'}
      user={{id: 1}}
      quickRepliesRightColor={'white'}
      quickRepliesLeftColor={'#1cafff'}
      onQuickReplies={(value) => console.log(value)}
      backgroundImage={{
        uri:
          'https://images.unsplash.com/photo-1569173112611-52a7cd38bea9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      }}
      data={data}
      textInputShow={true}
      textInputPlaceholder={'send message...'}
    />
  );
};

export default Example;
```

## Props

| Name                   |                Type                |                 Description |
| :--------------------- | :--------------------------------: | --------------------------: |
| data                   |               Array                |                message data |
| textInputShow          |                Bool                |          Text input visible |
| onSend                 | (message)=>onSend(message[0].text) |            Text input value |
| tickViewShow           |                Bool                |       message state visible |
| user                   |               Array                |               user={{id:1}} |
| backgroundImage        |               Source               |            Background Image |
| PostButtonView         |                Bool                |         Post Button Visible |
| quickRepliesRightColor |               Color                |    quickReplies Right Color |
| quickRepliesLeftColor  |               Color                |     quickReplies Left Color |
| onClickDocument        |               ------               |              Document Click |
| onClickVideo           |               ------               |                 Video Click |
| onPostClick            |               ------               |           Post Button Click |
| onDeleteMessage        |               ------               | Message delete button Click |
| onSystemMessage        |               ------               | System message button Click |
| onSystemMessage        |               ------               | System message button Click |
| onQuickReplies         |               ------               | onQuickReplies button Click |
| writing                |                Bool                |                     writing |

## License

[MIT](https://choosealicense.com/licenses/mit/)
