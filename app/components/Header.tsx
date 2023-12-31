import { FC } from 'react';
import Link from 'next/link';

const Header: FC = () => {
    return (
      <header className="page-header">
        <div className="logo">
          <Link href="/">
            <h1 className="header-title">Message Sender</h1>
            <h2 className='header-title2'> Telegram Bot</h2>
          </Link>
        </div>
        <nav className="page-nav">
          <ul>
            <li>
              <Link href="/message">Message</Link>
            </li>
            <li>
              <Link href="/image">Picture/Photo</Link>
            </li>
            <li>
              <Link href="/video">Video</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  };

export default Header;
