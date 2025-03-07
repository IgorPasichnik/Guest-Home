import React, { useRef } from "react";
import Styles from "./CardReviews.module.scss";
import useScrollbar from "../../hooks/use-scrollbar";

type CardReviewsProps = {
  description: string;
  name: string;
};

const CardReviews: React.FC<CardReviewsProps> = ({ description, name }) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const hasScroll = true;

  useScrollbar({ root: wrapper, hasScroll });

  return (
    <div className={Styles.cardReviews}>
      <p ref={wrapper} className={Styles.reviewText}>
        {description}
      </p>
      <div className={Styles.triangle} />
      <h3 className={Styles.reviewAuthor}>{name}</h3>
    </div>
  );
};

export default CardReviews;
