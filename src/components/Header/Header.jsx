import React from "react";
import SearchBox from "./SearchBox";
import Filter from "./Filter";
import booksCollection from "../../../db.json";

const Header = ({ setSearchText, setSortingValue }) => {
  return (
    <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
      <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
        <SearchBox handleSearch={(value) => setSearchText(value)} />
        <Filter handleSort={(value) => setSortingValue(value)} />
      </div>
    </header>
  );
};

export default Header;
