import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

// Pages
import { Home } from './pages/Home';
import { Technology } from './pages/Technology';
import { Applications } from './pages/Applications';
import { Validation } from './pages/Validation';
import { Industries } from './pages/Industries';
import { Ecosystem } from './pages/Ecosystem';
import { Investors } from './pages/Investors';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

// Legal Pages
import { Imprint } from './pages/legal/Imprint';
import { Privacy } from './pages/legal/Privacy';
import { LegalNotice } from './pages/legal/LegalNotice';

function ScrollToTop() {
  const { pathname } = window.location;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="technology" element={<Technology />} />
          <Route path="applications" element={<Applications />} />
          <Route path="validation" element={<Validation />} />
          <Route path="industries" element={<Industries />} />
          <Route path="ecosystem" element={<Ecosystem />} />
          <Route path="investors" element={<Investors />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          
          <Route path="legal/imprint" element={<Imprint />} />
          <Route path="legal/privacy" element={<Privacy />} />
          <Route path="legal/legal-notice" element={<LegalNotice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
