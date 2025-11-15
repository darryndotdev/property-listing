'use client';

import { useEffect, useState } from 'react';
import Container from '../Container/Container';
import PropertyItem from '../PropertyItem/PropertyItem';
import styles from './PropertyList.module.css';

function PropertyList() {
    const [properties, setProperties] = useState([]);

    useEffect(function () {
        async function getData() {
            try {
                const res = await fetch(`/api/properties`);
                const data = await res.json();
                setProperties(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, []);

    return (
        <Container>
            <ul className={styles.list}>
                <PropertyItem />
            </ul>
        </Container>
    );
}

export default PropertyList;
