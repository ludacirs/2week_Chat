import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Chats, Login } from '@pages';
import '@styles/index.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chats />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );


export default App;
