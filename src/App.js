import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import BookingPage from './components/BookingPage'
import Footer from './components/Footer'
import {ChakraProvider} from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <ChakraProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/reservation' element={<BookingPage/>}/>
        </Routes>
        <Footer />
      </ChakraProvider>
    </React.Fragment>
  );
}

export default App;
