import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
