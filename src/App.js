import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Loader from "./components/common/Loader/Loader";
import Layout from "./outlet/Layout";
import { TeachersProvider } from "./context/TeachersContext";


//================== Lazy pages Imports====================
const UserListPage = lazy(() => import("./pages/UserListPage"));
const NotFound = lazy(() => import("./pages/NotFoundPage"));

// ===========Lazy Loading wrapper=============
const LazyLoadingWrapper = ({ Component }) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component />
    </Suspense>
  );
};

function App() {
  return (
    <div className="App">
      {/* TeachersProvider */}
      <TeachersProvider>
        {/* ===================Routes===================== */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<LazyLoadingWrapper Component={UserListPage} />} />
              <Route path='*' element={<LazyLoadingWrapper Component={NotFound} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TeachersProvider>
    </div>
  );
}

export default App;
