// src/app/about/page.tsx
import styles from './about.module.css';

export default function AboutPage() {
    return (
        <div className={styles.aboutContainer}>
            <h1>About Us</h1>
            <p>We are Wanderlust Tours, your travel partner for unforgettable experiences.</p>
            <p>From serene domestic destinations to exotic international locations, we have it all.</p>
        </div>
    );
}
