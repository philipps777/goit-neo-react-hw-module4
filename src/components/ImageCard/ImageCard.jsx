import style from "./ImageCard.module.css";
import { CiHeart, CiUser } from "react-icons/ci";

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div className={style.imageCardContainer}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={onImageClick}
      />
      <ul className={style.imageCardHoverInfo}>
        <li className={style.imageCardHoverInfoItem}>
          <CiUser size="20" />
          {image.user.name}
        </li>
        <li className={style.imageCardHoverInfoItem}>
          <CiHeart size="20" />
          {image.likes}
        </li>
      </ul>
    </div>
  );
};

export default ImageCard;
