import Styles from "./PhotoGallery.module.scss";
import { useState } from "react";
import { Photo } from "./types";
import { Navigation } from "./Navigation";
import { PreviewGallery } from "./PrewiewGallery";
import { TransitionPhoto } from "./TransitionPhoto";

interface PhotoGalleryProps {
  photos: Photo[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  const [indexActivePhoto, setIndexActivePhoto] = useState(0);
  const prevPhoto = photos[indexActivePhoto - 1];
  const nextPhoto = photos[indexActivePhoto + 1];

  if (!photos.length) {
    return null;
  }

  return (
    <>
      <div id="photo-gallery" className={Styles.gallery}>
        <div className={Styles.galleryContainer}>
          <h1>Фотогалерея</h1>
          <div className={Styles.roomGallery}>
            <div className={Styles.roomGalleryContainer}>
              <TransitionPhoto
                className={Styles.roomGalleryTransitionPhoto}
                photos={photos}
                indexActivePhoto={indexActivePhoto}
              />
              <Navigation
                className={Styles.roomGalleryNavigation}
                disabledPrev={!prevPhoto}
                disabledNext={!nextPhoto}
                onPrevClick={() => {
                  setIndexActivePhoto(indexActivePhoto - 1);
                }}
                onNextClick={() => {
                  setIndexActivePhoto(indexActivePhoto + 1);
                }}
              />
            </div>
            <PreviewGallery
              className={Styles.roomGalleryPreviewList}
              indexActivePhoto={indexActivePhoto}
              photos={photos}
              setNewPhoto={setIndexActivePhoto}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;
