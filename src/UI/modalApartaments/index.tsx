import React from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Styles from "./ModalApartaments.module.scss";
import "./ModalApart.scss";
import closeIcon from "../../images/black-close-64.png";

interface ModalProps {
  active: boolean;
  setActive: (isActive: boolean) => void;
  room: {
    images: string[];
    title: string;
    description: string;
    folder?: string;
  };
}

const ModalApartaments: React.FC<ModalProps> = ({
  active,
  setActive,
  room,
}) => {
  const images: ReactImageGalleryItem[] = room.images.map((img) => ({
    original: img,
    thumbnail: img,
    originalClass: Styles.galleryImage,
    thumbnailClass: Styles.thumbImage,
  }));

  return (
    <div
      className={`${Styles.modalOverlay} ${
        active ? Styles.active : Styles.hidden
      }`}
      onClick={() => setActive(false)}
    >
      <div onClick={(e) => e.stopPropagation()} className={Styles.modalContent}>
        <div className={Styles.modalApart}>
          <h2>{room.title}</h2>
          <img
            src={closeIcon}
            alt="Закрыть"
            className={Styles.closeButton}
            onClick={() => setActive(false)}
          />
        </div>
        <div className={Styles.galleryWrapper}>
          <ImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={true}
            showNav={true}
            showThumbnails={true}
            thumbnailPosition="left"
            lazyLoad={true}
            additionalClass={Styles.customGallery}
          />
        </div>
        <p>{room.description}</p>
      </div>
    </div>
  );
};

export default ModalApartaments;
