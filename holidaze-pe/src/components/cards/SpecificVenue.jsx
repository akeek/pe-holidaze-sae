import React, { useState } from "react";
import styles from "../../styles/specificVenue.module.css";
import { Carousel } from "react-bootstrap";
import { FaWifi, FaParking, FaDog, FaUtensils } from "react-icons/fa";


function SpecificCard(props) {
    const { venueId, venue } = props;
    const { media, name, description, price, meta } = venue;
    const [date, setDate] = useState(new Date());

    if (!Array.isArray(media)) {
        return null;
    }

    let renderedMeta = null;

    const descIcons = {
        breakfast: <FaUtensils />,
        parking: <FaParking />,
        pets: <FaDog />,
        wifi: <FaWifi />,
    };

    if (meta && Object.keys(meta).length > 0) {
        renderedMeta = Object.entries(meta).map(([key, value]) => {
            const icon = descIcons[key];
            return (
                <div key={key}>
                    <div>{icon}</div>
                </div>
            );
        });
    }

    return (
        <div>
            <h2>{name}</h2>
            <div>
                <p className={styles.priceInfo}>
                    Price: <span>${price} per night</span>
                </p>
            </div>
            <Carousel className={styles.carousel}>
                {media.map((img) => (
                    <Carousel.Item key={img}>
                        <img
                            src={img}
                            className={styles.venueImg}
                            alt={name}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className={styles.inc}>
                <h4>Included</h4>
                <div className={styles.icons}>{renderedMeta}</div>
            </div>
            <hr></hr>
            <div>
                <p className={styles.des}>{description}</p>
            </div>
            <hr></hr>
            <div className={styles.availabilityContainer}>
                <h4 className={styles.availabilityHeading}>Check availability</h4>
                <div className={styles.availability}>

                </div>
                <button className={styles.venueBtn}>
                    Book Venue
                </button>
            </div>
        </div>
    );
}

export default SpecificCard;
