import './App.css';
import Home from './pages/Home';
import ListCourse from './pages/ListCourse';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import CourseDetail from './pages/CourseDetail';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="listcourse" element={<ListCourse />} />
        <Route path="courseDetail" element={<CourseDetail />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  </>
  );
}

export default App;
