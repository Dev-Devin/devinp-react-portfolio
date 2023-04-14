import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";

const styles = {
  body: {
    backgroundColor: "393f1e",
    color: "FF1D25",
  },
};

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <body style={styles.body}>
      <div className="App">
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        <main style={{ minHeight: "80vh", backgroundColor:"grey" }}>{renderPage()}</main>
        <Footer />
      </div>
    </body>
  );
}

export default App;
