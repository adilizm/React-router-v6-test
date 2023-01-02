import './App.css';
import {  Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Notfound from './pages/Notfound';
import Header from './components/header';
import BooksList from './pages/BooksList';
import Book from './pages/Book';
import BooksHead from './components/BooksHead';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="about" element={<About />} />

        <Route path='books' element={<BooksHead />} >
          <Route index element={<BooksList />} />
          <Route path=":id" element={<Book />} />
        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );  
}

export default App;
