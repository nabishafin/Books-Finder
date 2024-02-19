import { Fragment, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import BooksContainer from "./components/BooksContainer/BooksContainer";

import booksCollection from "../db.json";
import { handleSort } from "./utilities";

function App() {
  const [books, setBooks] = useState(booksCollection);
  const [searchText, setSearchText] = useState("");
  const [sortingValue, setSortingValue] = useState("");

  let filteredBooks = books?.filter((book) =>
    book.name.toLowerCase().includes(searchText.toLowerCase())
  )

  filteredBooks = handleSort(filteredBooks, sortingValue);

  return (
    <div className="relative font-[Manrope] before:fixed before:left-0 before:top-0 before:-z-10 before:h-[435px] before:w-full before:rounded-bl-3xl before:bg-[#EAE6D7] max-md:px-4 lg:text-lg before:lg:rounded-bl-[79px]">
      <Navbar />
      <main className="my-10 lg:my-14">
        <Header
          setSearchText={setSearchText}
          setSortingValue={setSortingValue}
        />
        <BooksContainer filteredBooks={filteredBooks} setBooks={setBooks} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
