import { Route, Routes } from 'react-router-dom';
import { lazy, useState } from 'react';

import LayoutComponent from './Components/Layout/LayoutComponent';
import { ModalProvider } from './Context/Modal/ModalContext';
import { LanguageProvider } from './Context/Language/LanguageContext';

const timeOut = 4000;

const lazyWithDelay = (importFn, delay) => {
  return lazy(() =>
    Promise.all([
      importFn(),
      new Promise(resolve => setTimeout(resolve, delay))
    ]).then(([moduleExports]) => moduleExports)
  );
};

const HomePage = lazyWithDelay(() => import('./Pages/Home/HomePage'), timeOut);
const AboutPage = lazyWithDelay(() => import('./Pages/About/AboutPage'), timeOut);
const BooksPage = lazyWithDelay(() => import('./Pages/Books/BooksPage'), timeOut);
const SearchPage = lazyWithDelay(() => import('./Pages/Search/SearchPage'), timeOut);
const VisitorsPage = lazyWithDelay(() => import('./Pages/Visitors/VisitorsPage'), timeOut);
const ErrorPage = lazyWithDelay(() => import('./Pages/Error/ErrorPage'), timeOut);

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClose = () => {
    setIsModalOpen(false);
  }

  const openModal = () => {
    setIsModalOpen(true);
  }

  return (
    <>
      <LanguageProvider>
        <ModalProvider>
          <Routes>
            <Route path="/" element={<LayoutComponent openModal={openModal} isModalOpen={isModalOpen} onClose={onClose} />}>
              <Route index element={<HomePage />} />
              <Route path={"about"} element={<AboutPage />} />
              <Route path={"books"} element={<BooksPage />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path={"search"} element={<SearchPage />} />
              <Route path={"visitors"} element={<VisitorsPage />} />
            </Route>
          </Routes >
        </ModalProvider >
      </LanguageProvider>
    </>
  )
}

export default App
