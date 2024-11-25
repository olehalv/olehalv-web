import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import StudioRoute from './studio/StudioRoute.tsx';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/studio/*" element={<StudioRoute />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
