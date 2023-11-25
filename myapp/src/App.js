import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Trangchu from './Pages/Trangchu';
import Giohang from './Pages/Giohang';
<<<<<<< HEAD
import PersonalBuy from './Pages/personalBuy';
import TrangchuLogged from './Pages/TrangchuLogged';
=======
<<<<<<< HEAD
import PersonalBuy from './Pages/personalBuy';
import TrangchuLogged from './Pages/TrangchuLogged';
=======
>>>>>>> e88667e29b4cc1193f67e0357ab6b69faf6cd17c
>>>>>>> 35140d482698f0b76337461a335281a4dceb1169
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
<<<<<<< HEAD
                <Route path='/homepagelogged' element={<TrangchuLogged />} />
                <Route path='/personalBuy' element={<PersonalBuy />} />
=======
<<<<<<< HEAD
                <Route path='/homepagelogged' element={<TrangchuLogged />} />
                <Route path='/personalBuy' element={<PersonalBuy />} />
=======
>>>>>>> e88667e29b4cc1193f67e0357ab6b69faf6cd17c
>>>>>>> 35140d482698f0b76337461a335281a4dceb1169
            </Routes>
        </div>
    );
}
export default App;