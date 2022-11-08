import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import SingleBlog from './pages/SingleBlog';
import BlogPage from './pages/BlogPage';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:slug" element={<SingleBlog />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
