import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './components/Home/Home.tsx';
import StudioRoute from './studio/StudioRoute.tsx';

import './index.css';
import Projects from './components/Projects/Projects.tsx';
import Skills from './components/Skills/Skills.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Skills />
              <Projects />
            </>
          }
        />
        <Route path="/studio/*" element={<StudioRoute />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
