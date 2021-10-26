import Link from 'next/link';

// components
import Layout from '../components/Layout';
import Testimonials from '../components/Testimonials';
import ServiceBlock from '../components/ServiceBlock';

const SmallBusinessWebsites = () => {
  return (
    <Layout
      title='Headless WordPress development | Freelance headless ecommerce developer Selby | Rob Kendal'
      description='As a freelance headless WordPress developer, I specialise in web development using the Jamstack and headless content management systems. I build fast, accessible websites in Selby, York, and Leeds.'
    >
      <section className='section home-hero'>
        <div className='hero-left'>
          <h1>A headless WordPress developer for fast, accessible websites to supercharge your business</h1>
          <p>
            Looking for a <strong>freelance web developer</strong>, who specialises in <strong>headless WordPress development</strong> and builds websites to generate
            more leads for your business? <br /> Well hello there 👋🏻, I'm Rob.
          </p>
          <p>
            I deliver winning websites built on the Jamstack that help in more ways than one:
          </p>
          <ul style={{ lineHeight: '1.9' }}>
            <li>
              Create websites built on the latest technology with planning and development support to get started.
            </li>
            <li>
              Transform sluggish websites that don't rank well into lead-generating machines for your business.
            </li>
            <li>
              Take sales online with a conversion-focussed ecommerce website using Shopify or Woocommerce in headless mode for the best of both worlds.
            </li>
            <li>
              Skyrocket website performance by developing a headless CMS solution that powers a static site generator such as Gatsby or Next.js.
            </li>
            <li>
              Provide simple, straightforward SEO advice to improve your search rankings.
            </li>
          </ul>
          <p>
            Tell me about your project and let's see how we can work together.
          </p>
          <br />
          <p>
            <Link href='/contact'>
              <a className='button is-primary has-icon is-medium'>
                <span>hire me</span>
                <span className='icon fas fa-chevron-circle-right'></span>
              </a>
            </Link>
            <Link href='/blog'>
              <a className='button is-default has-icon is-medium'>
                <span>read my articles</span>
                <span className='icon fas fa-chevron-circle-right'></span>
              </a>
            </Link>
          </p>
        </div>
        <div className='hero-right'>
          <img
            src='/img/rob-kendal-1.png'
            alt='Rob Kendal freelance Jamstack website developer'
            className='fancy-img is-lg'
            width="250"
          />
        </div>
      </section>

      <section className='section is-md has-border-top'>
        <h2 className='has-text-centered'>
          Content management you know; <br />websites your customers love
        </h2>
        <p className='has-text-centered'>
          You already know and love WordPress, so let's make it headless and build a fast, powerful front-end your customers will flock to.
        </p>
        <br />
        <div className="columns is-centered is-multiline serviceblock-columns">
          <div className="column is-4-desktop is-12-tablet">
            <ServiceBlock
              icon="far fa-hand-pointer"
              title="Fast &amp; user-friendly"
              blurb="Give your customers a fast, friendly website that's tailored to them and built with conversions in mind. Watch your lead generation take flight."
            />
          </div>
          <div className="column is-4-desktop is-12-tablet">
            <ServiceBlock
              icon="fas fa-suitcase-rolling"
              title="No migration needed!"
              blurb="By converting your existing WordPress backend to headless mode, the content management system you love can power a brand new website in less time!"
            />
          </div>
          <div className="column is-4-desktop is-12-tablet">
            <ServiceBlock
              icon="fas fa-cash-register"
              title="Headless ecommerce"
              blurb="Shopify and Woocommerce provide the power of a proven backend, whilst the Jamstack front-end delivers great online shopping experiences."
            />
          </div>
          <div className="column is-4-desktop is-12-tablet">
            <ServiceBlock
              icon="fas fa-rocket"
              title="Great for search engines"
              blurb="Solid, straightforward advice for you. Search-friendly treatment for your website. More organic traffic for your business. Win. Win. Win."
            />
          </div>
          <div className="column is-4-desktop is-12-tablet">
            <ServiceBlock
              icon="fas fa-users"
              title="Designs to please all"
              blurb="You won't find off-the-shelf themes or templates here. You'll get a bespoke, one of a kind design that suits your business to a T"
            />
          </div>
          <div className="column is-4-desktop is-12-tablet">
            <ServiceBlock
              icon="fas fa-clipboard-check"
              title="Self-service as standard"
              blurb="You're already familiar with WordPress so you'll have no trouble managing your own content. No learning curve, no new systems to master."
            />
          </div>
        </div>
        <br />
        <div className="has-text-centered">
          <Link href='/contact'>
            <a className='button is-primary has-icon is-large'>
              <span>book a free discovery call</span>
              <span className='icon fas fa-chevron-circle-right'></span>
            </a>
          </Link>
        </div>
      </section>

      <section className='section is-secondary'>
        <article className='home-section-wordpress media'>
          <figure className='media-left'>
            <img
              src='/img/example-shopify.png'
              alt='Example small business website displayed on a laptop'
              className='unstyled'
            />
            <img
              src='/img/react-logo-white.png'
              alt='React JS logo'
              className='unstyled'
            />
          </figure>
          <div className='media-content'>
            <h2 className='is-white'>Jamstack and headless CMS development services</h2>
            <p>
              I specialise in delivering winning business websites powered by headless content management solutions, such as Strapi, WordPress, GraphCMS and more.
            </p>
            <p>
              With me, as well as a reliable freelance web developer, you'll always
              get:
            </p>
            <ul className='unstyled'>
              <li className='flex has-padding-bottom-sm'>
                <span className='fa fa-thumbs-up has-padding-right-sm'></span>
                <span>
                  Straightforward knowledge and advice from a professional freelance web developer more than 15 years in the business.
                </span>
              </li>
              <li className='flex has-padding-bottom-sm'>
                <span className='fa fa-thumbs-up has-padding-right-sm'></span>
                <span>
                  Honest, reliable suggestions that always keep your business in mind.
                </span>
              </li>
              <li className='flex has-padding-bottom-sm'>
                <span className='fa fa-thumbs-up has-padding-right-sm'></span>
                <span>
                  An approach that is built upon marketing-led websites, conversion optimisation, and driving leads.
                </span>
              </li>
              <li className='flex has-padding-bottom-sm'>
                <span className='fa fa-thumbs-up has-padding-right-sm'></span>
                <span>
                  First-class support from day 1: from planning, development, delivery and beyond!
                </span>
              </li>
              <li className='flex has-padding-bottom-sm'>
                <span className='fa fa-thumbs-up has-padding-right-sm'></span>
                <span>
                  Simple marketing and Search Engine Optimisation (SEO) services set for growth.
                </span>
              </li>
              <li className='flex has-padding-bottom-sm'>
                <span className='fa fa-thumbs-up has-padding-right-sm'></span>
                <span>
                  Expert website design services and modern website development practices
                  including, Next.js, Frontity, GraphQL and the Jamstack for superb customer experiences.
                </span>
              </li>
              <li className='flex has-padding-bottom-sm'>
                <span className='fa fa-thumbs-up has-padding-right-sm'></span>
                <span>
                  Help and support launching super fast, accessible, static
                  websites that rank well on search engines.
                </span>
              </li>
            </ul>
            <p>Let's talk about your small business website project and how we can hit your goals.</p>
            <p>
              <Link href='/contact'>
                <a className='button is-default has-icon is-medium'>
                  <span>discuss your project</span>
                  <span className='icon fas fa-chevron-circle-right'></span>
                </a>
              </Link>
            </p>
          </div>
        </article>
      </section>

      <section className='section is-md'>
        <h2 className='has-text-centered'>
          Brands of all sizes
        </h2>
        <p className='has-text-centered'>
          As a freelance web developer, I've loved working with some superb
          brands, nationally and local to York.
        </p>
        <div className='columns is-multiline'>
          <div className='column is-12-tablet is-4-desktop is-2-widescreen is-offset-1-widescreen has-text-centered'>
            <img src='/img/logos/nhs-logo.png' alt='NHS logo' />
          </div>
          <div className='column is-12-tablet is-4-desktop is-2-widescreen has-text-centered'>
            <img src='/img/logos/hubspot-logo.png' alt='HubSpot logo' />
          </div>
          <div className='column is-12-tablet is-4-desktop is-2-widescreen has-text-centered'>
            <img
              src='/img/logos/citizens-advice-logo.png'
              alt='Citizens Advice logo'
            />
          </div>
          <div className='column is-12-tablet is-4-desktop is-2-widescreen has-text-centered'>
            <img
              src='/img/logos/enterprise-partnership.png'
              alt='Yorkshire Enterprise Partnership logo'
            />
          </div>
          <div className='column is-12-tablet is-4-desktop is-2-widescreen has-text-centered'>
            <img
              src='/img/logos/north-yorkshire-council.png'
              alt='North Yorkshire County Council logo'
            />
          </div>
        </div>
      </section>

      <section className='section is-md'>
        <div className='container'>
          <h2 className='has-text-centered'>What my clients say</h2>
          <p className='has-text-centered'>
            From small business web design services to digital marketing and support, here's what some of my clients have to say.
          </p>
          <br />
          <Testimonials />
        </div>
      </section>

      <section className='section is-md'>
        <div className='container has-text-centered'>
          <h2>How can I help?</h2>
          <p>
            Not sure if the Jamstack is right for you? Need more information or a quick chat about it all? It costs nothing to start a conversation but choosing the right path can save you a fortune.
          </p>
          <p>You'll get no sales pitch here. No pushy tactics or jargon that doesn't fit your needs. <br />Just simple, straightforward advice backed by years of helping businesses just like yours.</p>
          <br />
          <Link href='/contact'>
            <a className='button is-primary has-icon is-medium'>
              <span>discuss your project</span>
              <span className='icon fas fa-chevron-circle-right'></span>
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default SmallBusinessWebsites;
