import React from "react";
import Footer from "@/components/themes/themename/components/Footer";
import Header from "@/components/themes/themename/components/Header";

const StoreLayout = ({ children }) => {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="mb-16 md:mb-28 min-h-screen">{children}</section>
      <Footer />
    </main>
  );
};

export default StoreLayout;
