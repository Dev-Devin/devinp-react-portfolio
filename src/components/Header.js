import React, { useState } from "react";
import Navigation from "./Navigation";
import "../styles/Header.css";

function Header({ currentPage, handlePageChange }) {
  // state variable for page in order to render content in main section using navigation links

  return (
    <div>
      {/* <header className="header"> */}
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {/* </header> */}
    </div>
  );
}

export default Header;
