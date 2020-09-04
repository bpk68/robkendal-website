import Link from 'next/link';

// components
import Layout from '../components/Layout';

const Publications = () => {
  return (
    <Layout
      title='Download and buy web development ebooks and resources | Rob Kendal, freelance developer'
      description='Download helpful web development ebooks, videos and training courses on starting to code'
    >
      <h1 className='has-text-centered'>Publications</h1>
      <div className='container'>
        <p>
          In addition to my{' '}
          <Link href='/mentorship'>
            <a>mentorship programs</a>
          </Link>
          , I'm a published author and course creator, regularly crafting
          content to help people learn to code, land their first job, and
          improve their coding life!
        </p>
        <p>
          You can view, download and purchase my recent publications right here.
        </p>
        <section className='section'>
          <div className='columns'>
            <div className='column'>
              <div className='card'>
                <div className='card-image'>
                  <a
                    href='https://gum.co/WssIGB'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      src='/img/publications/from-aspire-to-hired-cover.png'
                      alt='From Aspire to Hired cover'
                      className='unstyled'
                    />
                  </a>
                </div>
                <div className='card-content'>
                  <h3 className='subtitle is-size-4'>
                    <a
                      href='https://gum.co/WssIGB'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      From Aspire To Hired
                    </a>
                  </h3>
                  <p>
                    I've helped people get into coding and land their first job
                    as a developer. They did it. I did it. You can do it too!
                  </p>
                  <p>
                    This ebook pulls together a collection of my most popular
                    articles including topics on:
                  </p>
                  <ul>
                    <li>Getting into development,</li>
                    <li>What to learn as a frontend developer,</li>
                    <li>
                      How to look for and land a job in the tech industry,
                    </li>
                    <li>...and more</li>
                  </ul>
                  <p className='has-text-centered'>
                    <script src='https://gumroad.com/js/gumroad.js'></script>
                    <a
                      className='gumroad-button button is-primary'
                      href='https://gum.co/WssIGB'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Get the ebook
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Publications;
