import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const styles = {
  body: {
    backgroundColor: "393f5e",
    color: "FF1D25",
  },
};

function App() {
  return (
    <body style={styles.body}>
      <div className="App">
        <Header />
        <Footer />
      </div>
    </body>
  );
}

export default App;
