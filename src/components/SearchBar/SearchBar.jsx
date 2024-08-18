import toast, { Toaster } from "react-hot-toast";
import { FiSearch } from "react-icons/fi";
import style from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const query = form.elements.searchInput.value.trim();
    if (query === "") {
      toast.error("Please set search query.");
    }
    onSearch(query);
    form.reset();
  };

  return (
    <header className={style.header}>
      <Toaster position="top-right" />

      <form className={style.searchForm} onSubmit={handleSubmit}>
        <input
          className={style.searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchInput"
        />
        <button className={style.searchBtn} type="submit">
          <FiSearch size="18" />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
