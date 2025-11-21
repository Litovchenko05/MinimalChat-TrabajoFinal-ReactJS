import { Route, Routes } from 'react-router-dom';
import ChatScreen from './screens/ChatScreen/ChatScreen'


function App() {

  return (
    <Routes>
      <Route path="/" element={<ChatScreen/>}/>
      <Route path="/chat" element={<ChatScreen/>}/>
      <Route path="/chat/:chat_id" element={<ChatScreen/>}/>
    </Routes>
  )
}

export default App
