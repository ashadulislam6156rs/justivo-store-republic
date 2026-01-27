import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
    return (
      <div className="flex flex-col min-h-screen w-full mx-auto">
        <header className="sticky top-0 w-full z-20 bg-white">
          <Navbar></Navbar>
        </header>
        <main className="flex-1">
          <Outlet></Outlet>
        </main>
        <footer className="bg-gradient-to-b from-[#0b1623] to-[#08101a]">
          <Footer></Footer>
        </footer>
      </div>
    );
};

export default MainLayout;