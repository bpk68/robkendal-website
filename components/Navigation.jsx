import { useRouter } from 'next/router';
import Link from 'next/link';

// styles
import styles from './scss/nav.module.scss';

const Navigation = () => {
  const router = useRouter();
  const isActive = href => {
    return router.pathname === href ? styles.active : ''
  }
  return (
    <nav role='navigation' className={styles.navigation}>
      <div className={styles.mainnav}>
        <Link href='/about'>
          <a className={isActive('/about')}>about</a>
        </Link>
        {/* <Link href='/wordpress-consultancy'>
          <a className={isActive('/wordpress-consultancy')}>WordPress</a>
        </Link> */}
        <Link href='/freelance-shopify-developer'>
          <a className={isActive('/freelance-shopify-developer')}>Shopify</a>
        </Link>
        <Link href='/case-studies'>
          <a className={isActive('/case-studies')}>case studies</a>
        </Link>
        {/* <Link href='/mentorship'>
          <a className={isActive('/mentorship')}>mentorship</a>
        </Link> */}
        <Link href='/publications'>
          <a className={isActive('/publications')}>publications</a>
        </Link>
        <Link href='/blog'>
          <a className={isActive('/blog')}>articles</a>
        </Link>
        <Link href='/contact'>
          <a
            className={`button is-primary has-icon ${isActive('/contact')} ${
              styles.button
            }`}
          >
            <span>hire me</span>
            <span className='icon fas fa-chevron-circle-right'></span>
          </a>
        </Link>
      </div>
      <div className={styles.mobilenav}>
        <div className={styles.mobiletoggle}>
          <input type='checkbox' />
          <p className={styles.navburger}>
            <span>menu</span>
            <span className='icon fas fa-bars'></span>
          </p>
          <div className={styles.mobilenavmenu}>
            <Link href='/about'>
              <a className={isActive('/about')}>about</a>
            </Link>
            <Link href='/freelance-shopify-developer'>
              <a className={isActive('/freelance-shopify-developer')}>Shopify</a>
            </Link>
            <Link href='/wordpress-consultancy'>
              <a className={isActive('/wordpress-consultancy')}>WordPress</a>
            </Link>
            <Link href='/case-studies'>
              <a className={isActive('/case-studies')}>case studies</a>
            </Link>
            {/* <Link href='/mentorship'>
              <a className={isActive('/mentorship')}>mentorship</a>
            </Link> */}
            <Link href='/publications'>
              <a className={isActive('/publications')}>publications</a>
            </Link>
            <Link href='/blog'>
              <a className={isActive('/blog')}>articles</a>
            </Link>
            <Link href='/contact'>
              <a
                className={`button is-primary has-icon ${isActive(
                  '/contact'
                )} ${styles.button}`}
              >
                <span>hire me</span>
                <span className='icon fas fa-chevron-circle-right'></span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
