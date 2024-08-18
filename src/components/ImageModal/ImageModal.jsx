import style from "./ImageModal.module.css";
import { CiHeart, CiUser } from "react-icons/ci";
import Modal from "react-modal";
Modal.setAppElement("#root");

const ImageModal = ({ modalState, onModalClose }) => {
  return (
    <Modal
      className={style.modal}
      overlayClassName={style.modalOverlay}
      isOpen={modalState.modalIsOpen}
      onRequestClose={onModalClose}
    >
      <img src={modalState.srcUrl} alt={modalState.altDescription} />
      <ul className={style.modalInfoList}>
        <li className={style.modalInfoListItem}>
          <CiUser size="20" />
          {modalState.authorName}
        </li>
        <li className={style.modalInfoListItem}>
          <CiHeart size="20" />
          {modalState.likes}
        </li>
      </ul>
      <p className={style.modalInfoDescription}>
        {modalState.largeDescription}
      </p>
    </Modal>
  );
};

export default ImageModal;
