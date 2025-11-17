import Star from '../Icons/Star';
import styles from './SuperHost.module.css';

function SuperHost() {
    return (
        <div className={styles.host}>
            Superhost <Star height='20' width='20' />
        </div>
    );
}

export default SuperHost;
