import Link from 'next/link';

// components
import Layout from '../components/Layout';
import Testimonials from '../components/Testimonials';
import ServiceBlock from '../components/ServiceBlock';

const WordPressConsultancy = () => {
  return (
    <Layout
      title='Freelance WordPress developer | WordPress consultancy | Rob Kendal, freelance WordPress developer'
      description='As a freelance WordPress consultant I work with local and national brands to develop their WordPress marketing websites. Talk to me about your website development project today.'
    >
      <section className='section home-hero'>
        <div className='hero-left'>
          <h1>A freelance WordPress consultant who puts you first</h1>
          <p>
            Are you looking for help building your next WordPress website
            project? I'm a <strong>freelance WordPress developer</strong> with
            over 15 years experience in delivering enterprise websites for
            clients big and small.
          </p>
          <p>
            My WordPress consultancy services can help you in many situations:
          </p>
          <ul style={{ lineHeight: '1.9' }}>
            <li>
              You're looking to build a new WordPress project and need planning
              and development advice to get started.
            </li>
            <li>
              You have an existing WordPress website but it's not performing as
              well as it could.
            </li>
            <li>
              You want to use WordPress as a core part of your marketing
              strategy and need support to develop a solution.
            </li>
            <li>
              You want to migrate your WordPress website to another host or
              you're looking for WordPress hosting services.
            </li>
            <li>
              You have a number of third-party platforms, such as HubSpot, and
              want to integrate them with WordPress
            </li>
            <li>
              You want the performance benefits of using WordPress as a headless
              CMS to power a static site generator such as Gatsby or Next.js.
            </li>
            <li>
              You want to improve your search engine rankings and need a Search
              engine optimisation (SEO) audit and regular WordPress SEO support.
            </li>
            <li>
              You're looking for regular technical and support services from a
              reliable WordPress expert
            </li>
          </ul>
          <p>
            Let's get your WordPress project done properly; all it costs is a
            quick message to start!
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
            alt='Rob Kendal freelance WordPress developer'
            className='fancy-img is-lg'
          />
        </div>
      </section>

      <section className='section is-md has-border-top'>
        <h2 className='has-text-centered'>
          How I can help with your WordPress project
        </h2>
        <p className='has-text-centered'>
          I have a wealth of experience with a range of WordPress websites and can help your business with the following common project types.
        </p>
        <br />
        <div className="columns is-centered is-multiline serviceblock-columns">
          <div className="column is-4-desktop is-12-tablet">
            <ServiceBlock
              icon="far fa-hand-pointer"
              title="WordPress website"
              blurb="WordPress is a great choice for a new business website. From simple websites to complex enterprise solutions, you're in good hands from start to finish."
            />
          </div>
          <div className="column is-4-desktop is-12-tablet">
            <ServiceBlock
              icon="fas fa-suitcase-rolling"
              title="Migrations &amp; moves"
              blurb="Moving websites can be daunting. Let me take the stress out of this process and migrate your website between hosts or to WordPress from another supplier."
            />
          </div>
          <div className="column is-4-desktop is-12-tablet">
            <ServiceBlock
              icon="fas fa-cash-register"
              title="WordPress ecommerce"
              blurb="Take your sales online via WordPress + Woocommerce. Whether you want to sell £100's or £100,000's let's launch your ecommerce website together."
            />
          </div>
          <div className="column is-4-desktop is-12-tablet">
            <ServiceBlock
              icon="fas fa-rocket"
              title="Optimisation &amp; SEO"
              blurb="Current site running a bit slow? A speedy, well-optimised WordPress site is better for users and helps you climb those search engine rankings."
            />
          </div>
          <div className="column is-4-desktop is-12-tablet">
            <ServiceBlock
              icon="fas fa-server"
              title="WordPress hosting"
              blurb="I offer reliable, fast web hosting for WordPress websites including site optimisation, caching, security controls, 99% uptime and free SSL certificates."
            />
          </div>
          <div className="column is-4-desktop is-12-tablet">
            <ServiceBlock
              icon="fab fa-wordpress"
              title="Theme development"
              blurb="Whether it's custom WordPress theme development, additions to existing themes or advice on your current WordPress site setup and theme."
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

      <section className='section is-primary is-fullwidth'>
        <article className='home-section-wordpress media'>
          <figure className='media-left'>
            <img
              src='/img/example-wp.png'
              alt='WordPress website designed and built by Rob Kendal'
              className='unstyled'
            />
            <img
              src='/img/wordpress-logo.png'
              alt='WordPress logo'
              className='unstyled'
            />
          </figure>
          <div className='media-content'>
            <h2 className='is-white'>WordPress development services</h2>
            <p>
              I specialise in delivering WordPress websites and WordPress
              consultancy services to a range of clients of all sizes.
            </p>
            <p>
              With me, as well as a reliable freelance WordPress consultant, you'll always
              get:
            </p>
            <ul className='unstyled'>
              <li className='flex has-padding-bottom-sm'>
                <span className='fa fa-thumbs-up has-padding-right-sm'></span>
                <span>
                  A professional fullstack developer with over 15 years
                  experience.
                </span>
              </li>
              <li className='flex has-padding-bottom-sm'>
                <span className='fa fa-thumbs-up has-padding-right-sm'></span>
                <span>
                  A reliable point of contact who believes in straightforward,
                  honest advice.
                </span>
              </li>
              <li className='flex has-padding-bottom-sm'>
                <span className='fa fa-thumbs-up has-padding-right-sm'></span>
                <span>
                  A marketing-led and business-focussed approach to help maxmise
                  your return on investment
                </span>
              </li>
              <li className='flex has-padding-bottom-sm'>
                <span className='fa fa-thumbs-up has-padding-right-sm'></span>
                <span>
                  First class support from strategy and planning, through to
                  development, project launch and beyond!
                </span>
              </li>
              <li className='flex has-padding-bottom-sm'>
                <span className='fa fa-thumbs-up has-padding-right-sm'></span>
                <span>
                  Award-winning marketing and Search Engine Optimisation (SEO)
                  services
                </span>
              </li>
              <li className='flex has-padding-bottom-sm'>
                <span className='fa fa-thumbs-up has-padding-right-sm'></span>
                <span>
                  Expert WordPress services and modern development approaches
                  including Gatsby, Next.js, the WordPress REST API, GraphQL and
                  the Jamstack.
                </span>
              </li>
              <li className='flex has-padding-bottom-sm'>
                <span className='fa fa-thumbs-up has-padding-right-sm'></span>
                <span>
                  Enterprise-level HubSpot capaign management and WordPress
                  integrations
                </span>
              </li>
              <li className='flex has-padding-bottom-sm'>
                <span className='fa fa-thumbs-up has-padding-right-sm'></span>
                <span>
                  Help and support launching super fast, accessible, static
                  websites that rank well on search engines
                </span>
              </li>
            </ul>
            <p>Tell me about your WordPress project and how I can help</p>
            <br />
            <p>
              <Link href='/contact'>
                <a className='button is-default is-outline has-icon is-medium'>
                  <span>discuss my project</span>
                  <span className='icon fas fa-chevron-circle-right'></span>
                </a>
              </Link>
            </p>
          </div>
        </article>
      </section>

      <section className='section is-md'>
        <h2 className='has-text-centered'>
          I've worked with some great brands
        </h2>
        <p className='has-text-centered'>
          As a freelance WordPress developer, I've worked with some amazing
          local and national brands, as well as a host of local Yorkshire
          businesses
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
          <h2 className='has-text-centered'>Kind words from great clients</h2>
          <p className='has-text-centered'>
            From WordPress website development services to code mentoring,{' '}
            <br /> here's what some of my clients have to say.
          </p>
          <br />
          <Testimonials />
        </div>
      </section>

      <section className='section is-md'>
        <div className='container has-text-centered'>
          <h2>How can I help?</h2>
          <p>
            If you need a freelance WordPress consultant, want to discuss
            WordPress website development or want to hear some straightforward
            advice on how to start your next WordPress website project, I'd love to have a quick chat!
          </p>
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

export default WordPressConsultancy;
