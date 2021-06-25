import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

const App = () => {
  return (
    <div className="App">
      <div className="instructions">
        <h1>Protótipo Camino</h1>
        <span>
           UI/UX
        </span>
      </div>
      <div className="SearchBox">
        <SearchBar
          placeholder="Search..."
          handleChange={(e) => console.log(e.target.value)}
        />
      </div>

      <NavBar />
    </div>
  );
};

export default App;
