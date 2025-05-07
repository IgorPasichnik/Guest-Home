import { useMemo, useRef, useEffect } from "react";
import cl from "classnames";
import { Photo, CommonClassProps } from "../types";
import Styles from "./PrewieGallery.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
                  <LazyLoadImage
                    className={Styles.previewGalleryImage}
                    src={photo.preview}
                    alt={photo.description}
                    effect="blur"
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
