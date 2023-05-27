import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/latest.module.css";
import Card from "react-bootstrap/Card";

function VenuesCard(props) {
  const { id, media, rating, price, description } = props;

  let destination;
  if ((props.city !== "Unknown" && props.city !== "" && props.country !== "Unknown" && props.country !== "")) {
    destination = <p>{props.city}, {props.country}</p>
  } else {
    destination = <p>Unknown location</p>
  }

  return (
    <Card className={styles.card}>
      <div>
        <img src={media} alt="" className={styles.gridImg} />
        <div className={styles.cardinfo}>
          <p>{destination}</p>
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
