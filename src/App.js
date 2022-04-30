import React, { useState, useEffect } from 'react';
import ChatBox from './components/ChatBox';
import { Root, Section } from './components';
import Modal from './components/Modal';
import GroupsPanel from './components/GroupsPanel';
import Messages from './components/Messages';
import Socket, { sendSocketMessage } from './socket';
import Toast from './components/Toast';


const App = () => {
  const [roomId, setRoomId] = useState('entertainment');
  const [name, setName] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [socketId, setSocketId] = useState('');

  useEffect(() => {
    setMessages([]);
    sendSocketMessage('changeRoom', {
      socketId,
      roomId,
      name
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId]);

  return (
    <Socket setId={(id) => {
      setSocketId(id)
    }} action={setMessages} setToastMessage={setToastMessage}>
      <Root>
        <Section flex="0.4">
          <GroupsPanel roomId={roomId} setRoomId={setRoomId} />
        </Section>
        <Section isChat={true}>
          <Messages messages={messages} />
          <ChatBox action={(arg) => {
            setMessages([...messages, { name, ...arg, isSender: true }])
            sendSocketMessage('sendMessage', { socketId, roomId, name, ...arg })
          }} />
        </Section>
      </Root>
      {!name ? <Modal setName={(val) => {
        setName(val);
        sendSocketMessage('addUser', {
          socketId,
          roomId,
          name: val
        })
      }} /> : null}
      <Toast toastMessage={toastMessage}/>
    </Socket>
  )
}

export default App;
