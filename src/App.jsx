import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import styles from "./styles/layout.module.css";

// Lazy-loaded pages
const Home = lazy(() => import("./routes/Home.jsx"));
const About = lazy(() => import("./routes/About.jsx"));
const Projects = lazy(() => import("./routes/Projects.jsx"));
const Contact = lazy(() => import("./routes/Contact.jsx"));

export default function App() {
  return (
    <div className={styles.siteRoot}>
      <Header />
      <main className={styles.main}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
