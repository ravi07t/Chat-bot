import React, { useState } from 'react'
import './App.css'
import ChatConversation from './components/conversation'
import { getSearch } from './search';
import Card from 'react-bootstrap/Card';


function App() {
  const [message, setMessage] = useState([{
    message: 'Chat bot welcomes you! Type your name',
  }])
  const [text, setText] = useState('');

  const sendMessage = () => {
    let newMessage = [...message, { message: text, user: true }]
    if (newMessage.length > 2) {
      const replay = getSearch(text)
      newMessage = [...newMessage, { message: replay }]
    } else {
      newMessage = [...newMessage, { message: `Hi ${text}` }, { message: 'How can i help you?' }]
    }
    setText('');
    setMessage(newMessage);
  }

  return (
    <div className='container'>
      <Card style={{ width: '40rem', textAlign: 'center' }}>
        <Card.Body style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <h1>This is Chat bot for your assist</h1>
          <Card className='subContainer' >
            <div className='messages'>
              {message.map((data) => (
                <ChatConversation {...data} />
              ))}
              <div className='inputSearch'>
                <input type='search' value={text} placeholder='Type your message' onChange={(e) => setText(e.target.value)} />
                <button onClick={sendMessage} className='btnSend'>Send</button>
                <div style={{ fontSize: '10px' }}>Copy rights reserved for Chat bot🤖</div>
              </div>
            </div>
          </Card>
        </Card.Body>
      </Card>
    </div>
  )
}

export default App
