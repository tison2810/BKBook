import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Trangchu from './Pages/Trangchu';
import Giohang from './Pages/Giohang';
import PersonalBuy from './Pages/personalBuy';
import TrangchuLogged from './Pages/TrangchuLogged';
import Dangnhap from './Dangnhap';
import Dangky from './Dangky';
function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Trangchu />} />
                <Route path='/giohang' element={<Giohang />} />
                <Route path='/dangnhap' element={<Dangnhap />} />
                <Route path='/dangky' element={<Dangky />} />
                <Route path='/homepagelogged' element={<TrangchuLogged />} />
                <Route path='/personalBuy' element={<PersonalBuy />} />
            </Routes>
        </div>
    );
}
export default App;