import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/latest.module.css";

import Card from "react-bootstrap/Card";

function VenuesCard(props) {
  const { id, media, rating, city, price, description } = props;
  return (
    <Card className={styles.card}>
      <div>
        <img src={media} alt="" className={styles.gridImg} />
        <div className={styles.cardinfo}>
          <p>{city}</p>
          <p>&#9733;{rating}</p>
        </div>
        <p className={styles.descinfo}>{description}</p>
        <p className={styles.priceinfo}>Per night: ${price}</p>
        <Link to={`/specific/${id}`} className={styles.banner}>
          More info
        </Link>
      </div>
    </Card>
  );
}

export default VenuesCard;
