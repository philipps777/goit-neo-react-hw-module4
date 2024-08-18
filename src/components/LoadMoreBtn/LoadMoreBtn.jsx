import style from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMoreBtn }) => {
  return (
    <>
      <button
        className={style.loadMoreBtn}
        type="button"
        onClick={onLoadMoreBtn}
      >
        Load more
      </button>
    </>
  );
};

export default LoadMoreBtn;
