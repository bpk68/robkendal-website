import Link from 'next/link';

// styles
import styles from './scss/cta.module.scss';

const CallToAction = ({
  title,
  subtitle,
  image,
  url
}) => (
  <div className={styles.cta}>
    <article className="media">
      <figure className="media-left">
        <p className="image is-128x128">
          <img src={image} />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <h4 className="title is-size-4">
            <a href={url}>{title}</a>
          </h4>
          <h5 className="subtitle is-size-5">{subtitle}</h5>
          <a href={url} className="button is-link is-fullwidth">Find out more</a>
        </div>        
      </div>
    </article>
  </div>
);

export default CallToAction;

