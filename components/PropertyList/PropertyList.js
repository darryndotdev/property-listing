'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Container from '../Container/Container';
import PropertyItem from '../PropertyItem/PropertyItem';
import styles from './PropertyList.module.css';

function PropertyList() {
    const [properties, setProperties] = useState([]);
    const searchParams = useSearchParams();

    useEffect(
        function () {
            async function getData() {
                try {
                    const apiUrl = `/api/properties?${searchParams.toString()}`;

                    const res = await fetch(apiUrl);
                    const data = await res.json();
                    setProperties(data);
                } catch (error) {
                    console.log(error);
                }
            }
            getData();
        },
        [searchParams]
    );

    return (
        <Container>
            <ul className={styles.list}>
                {properties.map((property) => (
                    <PropertyItem property={property} key={property.id} />
                ))}
            </ul>
        </Container>
    );
}

export default PropertyList;
