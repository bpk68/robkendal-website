import Link from 'next/link';

// components
import SocialLinks from './SocialLinks';

// styles
import styles from './scss/footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <h4 className='is-sr-only'>Site links</h4>
    <ul>
      <li>
        <Link href='/the-front-end-podcast'>
          <a>podcast</a>
        </Link>
      </li>
      <li>
        <Link href='/publications'>
          <a>publications</a>
        </Link>
      </li>
      <li>
        <Link href='/projects'>
          <a>projects</a>
        </Link>
      </li>
      <li>
        <Link href='/contact'>
          <a>contact</a>
        </Link>
      </li>
      <li>
        <Link href='/faq-for-recruiters'>
          <a>recruitment FAQ</a>
        </Link>
      </li>
      <li>
        <Link href='/freelance-jamstack-developer'>
          <a>freelance Jamstack developer</a>
        </Link>
      </li>
    </ul>

    <ul>
      <li>
        <Link href='/wordpress-consultancy'>
          <a>freelance WordPress developer</a>
        </Link>
      </li>
      <li>
        <Link href='/freelance-shopify-developer'>
          <a>freelance Shopify developer</a>
        </Link>
      </li>
      <li>
        <Link href='/small-business-websites'>
          <a>small business websites</a>
        </Link>
      </li>
    </ul>

    <div className={styles['social-links']}>
      <h4 className='is-sr-only'>Connect on social media</h4>
      <SocialLinks overrideStyles={'none'} />
    </div>
    <div className={styles.copyright}>
      copyright &copy; {new Date().getFullYear()} <a href="https://ark-labs.co.uk" target="_blank">Ark Labs</a>.
      Registered company in England &amp; Wales No. 13589051. view the{' '}
      <Link href='/privacy'>
        <a>privacy policy</a>
      </Link>{' '}
      and{' '}
      <Link href='/terms'>
        <a>terms</a>
      </Link>
    </div>
  </footer>
);

export default Footer;