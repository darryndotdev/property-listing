import styles from './Hero.module.css';

function Hero() {
    return (
        <header className={styles.header}>
            <div>
                <h1>Peace, nature, dream</h1>
                <p className={styles.intro}>
                    Find and book a great experience.
                </p>
            </div>
        </header>
    );
}

export default Hero;
