import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';

import Trangchu from './Pages/Trangchu';
import Giohang from './Pages/Giohang';
import Dangnhap from './Dangnhap';
import Dangky from './Dangky';
function App() {
    return (
        <div className='App'>
            <AuthProvider>
            <Routes>
                <Route path='/' element={<Trangchu />} />
                <Route path='/giohang' element={<Giohang />} />
                <Route path='/dangnhap' element={<Dangnhap />} />
                <Route path='/dangky' element={<Dangky />} />
            </Routes>
            </AuthProvider>
        </div>
    );
}
export default App;