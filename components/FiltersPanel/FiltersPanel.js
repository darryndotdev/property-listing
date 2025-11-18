'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import styles from './FiltersPanel.module.css';
import Container from '../Container/Container';

function FiltersPanel() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [location, setLocation] = useState(() => {
        return searchParams.get('locations') || 'all';
    });

    const [isSuperHost, setIsSuperHost] = useState(() => {
        return searchParams.get('superhost') === 'true';
    });

    useEffect(() => {
        const params = new URLSearchParams(searchParams);

        if (location === 'all') {
            params.delete('locations');
        } else {
            params.set('locations', location);
        }

        if (isSuperHost) {
            params.set('superhost', 'true');
        } else {
            params.delete('superhost');
        }

        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, [location, isSuperHost]);

    return (
        <Container>
            <div className={styles.panel}>
                <form className={styles.form}>
                    <fieldset className={styles.fieldset}>
                        <select
                            onChange={(e) => setLocation(e.target.value)}
                            className={styles.select}
                        >
                            <option value='all'>All stays</option>
                            <option value='Norway'>Norway</option>
                            <option value='Finland'>Finland</option>
                            <option value='Sweden'>Sweden</option>
                            <option value='Switzerland'>Switzerland</option>
                        </select>
                        <label htmlFor='all' className={styles.label}>
                            <input
                                type='radio'
                                id='all'
                                name='input'
                                value='all'
                                className={styles.input}
                                onChange={(e) => setLocation(e.target.value)}
                                checked={location === 'all'}
                            />
                            <span className={styles.btn}>All stays</span>
                        </label>
                        <label htmlFor='norway' className={styles.label}>
                            <input
                                type='radio'
                                id='norway'
                                name='input'
                                value='Norway'
                                className={styles.input}
                                onChange={(e) => setLocation(e.target.value)}
                                checked={location === 'Norway'}
                            />
                            <span className={styles.btn}>Norway</span>
                        </label>
                        <label htmlFor='finland' className={styles.label}>
                            <input
                                type='radio'
                                id='finland'
                                name='input'
                                value='Finland'
                                className={styles.input}
                                onChange={(e) => setLocation(e.target.value)}
                                checked={location === 'Finland'}
                            />
                            <span className={styles.btn}>Finland</span>
                        </label>
                        <label htmlFor='sweden' className={styles.label}>
                            <input
                                type='radio'
                                id='sweden'
                                name='input'
                                value='Sweden'
                                className={styles.input}
                                onChange={(e) => setLocation(e.target.value)}
                                checked={location === 'Sweden'}
                            />
                            <span className={styles.btn}>Sweden</span>
                        </label>
                        <label htmlFor='switzerland' className={styles.label}>
                            <input
                                type='radio'
                                id='switzerland'
                                name='input'
                                value='Switzerland'
                                className={styles.input}
                                onChange={(e) => setLocation(e.target.value)}
                                checked={location === 'Switzerland'}
                            />
                            <span className={styles.btn}>Switzerland</span>
                        </label>
                    </fieldset>
                    <label>
                        <input
                            type='checkbox'
                            onChange={() => setIsSuperHost(!isSuperHost)}
                            checked={isSuperHost}
                        />
                        Superhost
                    </label>
                </form>
            </div>
        </Container>
    );
}

export default FiltersPanel;
