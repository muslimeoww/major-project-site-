import { Routes, Route } from 'react-router-dom';
import './Global.css';
import HomePage from './pages/HomePage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useState } from 'react';
import AboutPage from './pages/AboutPage';
import DocumentsPage from './pages/DocumentsPage';
import ContactsPage from './pages/ContactsPage';
import BusketPage from './pages/BusketPage';
import Katalog from './pages/Katalog';
import ItemPage from './pages/ItemPage';

function App() {
  const [title, setTitle] = useState(' ')
  const [subtitle, setSubtitle] = useState('')
  const [button, setButton] = useState(false)

  return (
    <div className="App">
      <Header title={title} subtitle={subtitle} button={button} />

      <Routes>
        <Route path='/' element={<HomePage setTitle={setTitle} setSubtitle={setSubtitle} setButton={setButton} />} />
        <Route path='/about' element={<AboutPage setTitle={setTitle} setSubtitle={setSubtitle} setButton={setButton} />} />
        <Route path='/documents' element={<DocumentsPage setTitle={setTitle} setSubtitle={setSubtitle} setButton={setButton} />} />
        <Route path='/contacts' element={<ContactsPage setTitle={setTitle} setSubtitle={setSubtitle} setButton={setButton} />} />
        <Route path='/busket' element={<BusketPage setTitle={setTitle} setSubtitle={setSubtitle} setButton={setButton} />} />
        <Route path='/katalog' element={<Katalog setTitle={setTitle} setSubtitle={setSubtitle} setButton={setButton} />} />
        <Route path='/item/:id' element={<ItemPage setTitle={setTitle} setSubtitle={setSubtitle} setButton={setButton} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
