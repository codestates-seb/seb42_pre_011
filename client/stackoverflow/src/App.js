import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Ask from './pages/Ask';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import Home from './pages/Home';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import { Questions } from './pages/Questions';
import Signup from './pages/Signup';
import Tags from './pages/Tags';
import Users from './pages/Users';

const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/ask" element={<Ask></Ask>}></Route>
        <Route path="/questions" element={<Questions></Questions>}></Route>
        <Route path="/tags" element={<Tags></Tags>}></Route>
        <Route path="/users" element={<Users></Users>}></Route>
        <Route path="/edit" element={<Edit></Edit>}></Route>
        <Route path="/mypage" element={<MyPage></MyPage>}></Route>
        <Route path="/detail" element={<Detail></Detail>}></Route>
      </Routes>
    </>
  );
};

export default App;
