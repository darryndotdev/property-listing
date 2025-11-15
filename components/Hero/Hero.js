import Container from '../Container/Container';
import styles from './Hero.module.css';

function Hero() {
    return (
        <header className={styles.header}>
            <Container>
                <h1>Peace, nature, dream</h1>
                <p className={styles.intro}>
                    Find and book a great experience.
                </p>
            </Container>
        </header>
    );
}

export default Hero;
