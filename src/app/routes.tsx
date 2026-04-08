import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import  Products  from './pages/Products';
import { Farms } from './pages/Farms';
import { Locations } from './pages/Locations';
import { Contact } from './pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'products', Component: Products },
      { path: 'farms', Component: Farms },
      { path: 'locations', Component: Locations },
      { path: 'contact', Component: Contact },
    ],
  },
]);
