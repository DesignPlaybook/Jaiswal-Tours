// src/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="homepage">
      <h1>Welcome to Wanderlust Tours & Travels</h1>
      <p>Your gateway to amazing journeys, domestic or international.</p>
      <nav>
        <ul>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/packages">Tour Packages</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </div>
  );
}
