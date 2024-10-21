import React, { ReactNode } from "react";
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
