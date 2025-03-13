import { useMemo, useRef, useEffect } from "react";
import cl from "classnames";

import { Photo, CommonClassProps } from "../types";

import Styles from "./PrewieGallery.module.scss";

interface PreviewGalleryProps extends CommonClassProps {
  photos: Photo[];
  indexActivePhoto: number;
  setNewPhoto: (id: number) => void;
}

export const PreviewGallery: React.FC<PreviewGalleryProps> = ({
  className,
  photos,
  indexActivePhoto,
  setNewPhoto,
}) => {
  //   if (!photos.length) {
  //     return null;
  //   }

  const previewContainer = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!previewContainer.current) {
      return;
    }

    previewContainer.current.style.transform = `translate3d(-${
      indexActivePhoto * 164
    }px, 0, 0)`;
  }, [indexActivePhoto]);

  return (
    <div className={cl(Styles.previewGallery, className)}>
      {useMemo(
        () => (
          <ul className={Styles.previewGalleryTrack} ref={previewContainer}>
            {photos.map((photo, id) => (
              <div key={photo.id}>
                <button
                  className={Styles.previewGalleryPreview}
                  onClick={() => setNewPhoto(id)}
                >
                  <img
                    className={Styles.previewGalleryImage}
                    src={photo.preview}
                    alt={photo.description}
                  />
                </button>
              </div>
            ))}
          </ul>
        ),
        []
      )}
      <div className={Styles.previewGalleryCover}>
        {indexActivePhoto + 1} / {photos.length}
      </div>
    </div>
  );
};
