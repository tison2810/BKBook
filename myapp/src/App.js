import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import { SearchProvider } from './SearchContext';

import Trangchu from './Pages/Trangchu';
import Giohang from './Pages/Giohang';
import PersonalBuy from './Pages/personalBuy';
import TrangchuLogged from './Pages/TrangchuLogged';
import Dangnhap from './Dangnhap';
import Dangky from './Dangky';
import Xemsanpham from './Pages/Xemsanpham';
import Xemchitiet from './Pages/Xemchitiet';
import Xemlichsutrang from './Pages/Xemlichsutrang';
function App() {
    return (
        <div className='App'>
            <AuthProvider>
            <SearchProvider>
            <Routes>
                <Route path='/' element={<Trangchu />} />
                <Route path='/giohang' element={<Giohang />} />
                <Route path='/dangnhap' element={<Dangnhap />} />
                <Route path='/dangky' element={<Dangky />} />
                <Route path='/homepagelogged' element={<TrangchuLogged />} />
                <Route path='/personalBuy' element={<PersonalBuy />} />
                <Route path='/xemsanpham/:bookId' element={<Xemsanpham />} />
                <Route path='/xemchitiet' element={<Xemchitiet />} />
                <Route path='/xemlichsutrang' element={<Xemlichsutrang />} />
            </Routes>
            </SearchProvider>
            </AuthProvider>
        </div>
    );
}
export default App;