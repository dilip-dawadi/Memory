import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './component/landing/landing'
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import Auth from './component/Auth/Auth';
import UserProfile from './component/Navbar/UserProfile'

import PostDetails from './component/PostDetails/PostDetails';


const App = () => 
{
  const user = JSON.parse(localStorage.getItem('profile'));
return (
  <BrowserRouter>
    <Container maxWidth="xl">
      <Navbar />
      <Routes>
       <Route path="/landing" exact element={<Landing />} />
        <Route path='/auth' exact element={(!user ? <Auth /> : <Navigate to ="/posts" />)} />
        <Route path='/' exact  element={ <Navigate to ="/posts" /> } />
        <Route path="/posts" exact element={<Home />} />
        <Route path="/UserProfile" exact element={<UserProfile />} />
        <Route path="/posts/search" exact element={<Home />} />
        <Route path="/posts/:id" exact element={<PostDetails />} />
        <Route path='/posts' exact element={<Home />} />
      </Routes>
      <Footer />
    </Container>
  </BrowserRouter>
)}

export default App;