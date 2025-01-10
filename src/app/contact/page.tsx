// src/app/contact/page.tsx
import styles from './contact.module.css';

export default function ContactPage() {
    return (
        <div className={styles.contactContainer}>
            <h1>Contact Us</h1>
            <form className={styles.contactForm}>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Message:
                    <textarea name="message"></textarea>
                </label>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}
