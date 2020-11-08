import React from 'react';
import data from './data';
import Section from './components/Section';
import SideMenu from './components/SideMenu';
import FormMenu from './components/FormMenu';
import FindPlans from './components/FindPlans';
import Footer from './components/Footer';
import About from './components/About';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Section 
        variant="blue"
        title={data[0].title}
        description={data[0].description} 
      />

      <Section 
        variant="beige"
        title={data[1].title}
        description={data[1].description}
      />

      <About />

      <FindPlans />

      <Footer />

      <SideMenu>
        <FormMenu />
      </SideMenu>

      <GlobalStyles />
    </>
  );
}

export default App;
