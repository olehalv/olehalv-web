import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import StudioRoute from './studio/StudioRoute.tsx';
import { client } from './studio/sanity.config.ts';

const getRoutes = async () => {
  return await client.fetch('*[_type == "routes"]');
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {console.log(await getRoutes())}
        <Route path="/studio/*" element={<StudioRoute />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
