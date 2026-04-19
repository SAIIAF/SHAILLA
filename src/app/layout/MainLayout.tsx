import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { useLanguage } from '../context/LanguageContext'; // 👈 ضيف دي

import './MainLayout.css';

export const MainLayout: React.FC = () => {
  const { lang } = useLanguage(); // 👈 ضيف دي

  return (
    <div
      className="main-layout"
      dir={lang === 'ar' ? 'rtl' : 'ltr'} // 👈 الحل هنا
    >
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};