import React from 'react';


const ChatAppend=(Data,NewData)=>{
Data=Data.reverse();
Data.push(NewData);
return Data.reverse();
}

export default ChatAppend;