// src/app/packages/page.tsx
import styles from './packages.module.css';

export default function PackagesPage() {
    return (
        <div className={styles.packagesContainer}>
            <h1>Tour Packages</h1>
            <div className={styles.packages}>
                <div className={styles.packageCard}>
                    <h2>Domestic Tours</h2>
                    <p>Explore the beauty of India with our amazing packages.</p>
                </div>
                <div className={styles.packageCard}>
                    <h2>International Tours</h2>
                    <p>Travel the globe with curated international tour packages.</p>
                </div>
            </div>
        </div>
    );
}
