import FiltersPanel from '../FiltersPanel/FiltersPanel';
import styles from './Hero.module.css';

function Hero() {
    return (
        <div className={styles.relative}>
            <header className={styles.header}>
                <div>
                    <h1>Peace, nature, dream</h1>
                    <p className={styles.intro}>
                        Find and book a great experience.
                    </p>
                </div>
            </header>
            <FiltersPanel />
        </div>
    );
}

export default Hero;
