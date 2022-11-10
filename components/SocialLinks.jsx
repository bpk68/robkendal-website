import styles from './scss/social.module.scss';

const SocialLinks = ({ overrideStyles }) => (
  <div className={overrideStyles ? overrideStyles : styles['social-links']}>
    <a
      href="https://indieweb.social/@kendalmintcode"
      target="_blank"
      rel="noreferrer noopener me"
    >
      <span className="fab fa-mastodon" aria-hidden="true"></span>
      <span className="screen-reader-text">Follow me on Mastodon</span>
    </a>
    <a
      href="https://github.com/bpk68/"
      target="_blank"
      rel="noreferrer noopener me"
    >
      <span className="fab fa-github" aria-hidden="true"></span>
      <span className="screen-reader-text">Check out my code on GitHub</span>
    </a>
    <a
      href="https://codepen.io/robkendal/"
      target="_blank"
      rel="noreferrer noopener me"
    >
      <span className="fab fa-codepen" aria-hidden="true"></span>
      <span className="screen-reader-text">Have a peek at my Codepen</span>
    </a>
    <a
      href="https://dev.to/kendalmintcode"
      target="_blank"
      rel="noreferrer noopener me"
    >
      <span className="fab fa-dev" aria-hidden="true"></span>
      <span className="screen-reader-text">Connect with me on Dev.to</span>
    </a>
    <a
      href="https://anchor.fm/the-front-end"
      target="_blank"
      rel="noreferrer noopener"
    >
      <span className="fas fa-podcast" aria-hidden="true"></span>
      <span className="screen-reader-text">
        Listen to The Front End Podcast on Anchor
      </span>
    </a>
    <a
      href="https://robkendal.co.uk/rss.xml"
      target="_blank"
      rel="noreferrer noopener"
    >
      <span className="fas fa-rss" aria-hidden="true"></span>
      <span className="screen-reader-text">Subscribe to my RSS feed</span>
    </a>
  </div>
);

export default SocialLinks;
