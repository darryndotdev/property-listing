'use client';
import Image from 'next/image';
import House from '../Icons/House';
import Person from '../Icons/Person';
import styles from './PropertyItem.module.css';
import Star from '../Icons/Star';
import SuperHost from '../SuperHost/SuperHost';

function PropertyItem({ property }) {
    return (
        <li className={styles.item}>
            <div>
                <div className={styles.imgDiv}>
                    {property.superhost && <SuperHost />}
                    <Image
                        src={`${property.image}`}
                        width={358}
                        height={200}
                        alt={property.title}
                        className={styles.img}
                    />
                </div>
                <div className={styles.card}>
                    <div className={styles.content}>
                        <h3 className='h4'>{property.title}</h3>
                        <p>{property.description}</p>
                        <div className={styles.flex}>
                            <div className={styles.detail}>
                                <House />
                                {property.capacity.bedroom} bedrooms
                            </div>
                            <div className={styles.detail}>
                                <Person />
                                {property.capacity.people} guests
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.price}>
                <p>
                    <span className={styles.highlight}>${property.price}</span>
                    /night
                </p>
                <div className={styles.detail}>
                    <Star />
                    {property.rating}
                </div>
            </div>
        </li>
    );
}

export default PropertyItem;
