import Link from 'next/link';

import styles from './MainHeader.module.css';
// import Image from 'next/image';

function MainHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>Featured Events</Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href='/events'>Browse All Events</Link>
            {/* failed attempt to include a link to repo under GitHub logo */}
            {/* <Link href='https://github.com/E-K8/events-app-nextjs'>
              <Image
                src='/images/octocat.png'
                alt='Octocat'
                width='50px'
                height='50px'
              ></Image>
            </Link> */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
