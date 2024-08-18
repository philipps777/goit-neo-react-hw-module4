import style from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <>
      <p className={style.errorMsg}>
        Something went wrong! Please, reload the page!
      </p>
    </>
  );
};

export default ErrorMessage;
