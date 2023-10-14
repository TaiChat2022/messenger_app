import { Backdrop, CircularProgress } from '@mui/material';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';

import { Suspense, lazy } from 'react';

const Login = lazy(() => import('./components/Login'));
const Main = lazy(() => import('./pages/main'));

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Suspense
            fallback={
              <Backdrop
                open
                style={{
                  zIndex: 10000,
                }}
                className="flex items-center justify-center"
              >
                <CircularProgress color="inherit" />
              </Backdrop>
            }
          >
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/messenger/*" element={<Main />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </>
  );
}

export default App;
