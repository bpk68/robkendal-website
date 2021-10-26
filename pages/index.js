import Link from 'next/link';

// components
import Layout from '../components/Layout';
import Testimonials from '../components/Testimonials';
import DateDisplay from '../components/DateDisplay';

// helpers
import { getSortedPostsData } from '../lib/posts';
import ServiceBlockHome from '../components/ServiceBlockHome';

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section className='section home-hero'>
        <div className='hero-left'>
          <h1>
            I make websites that deliver more leads for your business
          </h1>
          <p>
            Hi, I'm Rob Kendal. If you've been searching for a{' '}
            <strong>
              freelance web developer who knows Shopify, WordPress and frontend web
              development on the Jamstack inside and out
            </strong>
            , you've come to the right place.
          </p>
          <p>With me, you'll always get:</p>
          <ul className='unstyled'>
            <li className='flex has-padding-bottom-sm'>
              <span className='fa fa-thumbs-up has-text-secondary has-padding-right-sm'></span>
              <span>
                A fullstack developer with 15+ years experience building fast, lead-generating websites.
              </span>
            </li>
            <li className='flex has-padding-bottom-sm'>
              <span className='fa fa-thumbs-up has-text-secondary has-padding-right-sm'></span>
              <span>
                A reliable development professional who will always give you
                straightforward, honest advice.
              </span>
            </li>
            <li className='flex has-padding-bottom-sm'>
              <span className='fa fa-thumbs-up has-text-secondary has-padding-right-sm'></span>
              <span>
                A freelancer with expert skills in &nbsp;
                <Link href="/freelance-shopify-developer">
                  <a>Shopify development</a>
                </Link>, &nbsp;
                <Link href="/headless-wordpress-websites">
                  <a>headless content management systems</a>
                </Link>
                &nbsp; and &nbsp;
                <Link href="/wordpress-consultancy">
                  <a>WordPress websites</a>
                </Link>
              </span>
            </li>
            <li className='flex has-padding-bottom-sm'>
              <span className='fa fa-thumbs-up has-text-secondary has-padding-right-sm'></span>
              <span>
                Marketing website design and Shopify development driven by your business
                growth goals.
              </span>
            </li>
            <li className='flex has-padding-bottom-sm'>
              <span className='fa fa-thumbs-up has-text-secondary has-padding-right-sm'></span>
              <span>
                Award-winning marketing and Search Engine Optimisation (SEO)
                knowledge and support.
              </span>
            </li>
            <li className='flex has-padding-bottom-sm'>
              <span className='fa fa-thumbs-up has-text-secondary has-padding-right-sm'></span>
              <span>
                Expert web development services using forward-thinking
                technologies such as Frontity, Gatsby.js, Next.js, WordPress REST API,
                GraphQL and the Jamstack.
              </span>
            </li>
            <li className='flex has-padding-bottom-sm'>
              <span className='fa fa-thumbs-up has-text-secondary has-padding-right-sm'></span>
              <span>
                Enterprise-level HubSpot campaign management and integrations
                (including WordPress).
              </span>
            </li>
            <li className='flex has-padding-bottom-sm'>
              <span className='fa fa-thumbs-up has-text-secondary has-padding-right-sm'></span>
              <span>
                Help and support launching super fast, accessible, static
                websites that rank well on search engines.
              </span>
            </li>
          </ul>
          <p>
            Talking about your project costs nothing; choosing the right partner
            to deliver it could save you a fortune!
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
            alt='Rob Kendal freelance Shopify developer, WordPress consultant and headless CMS developer'
            className='fancy-img is-lg'
          />
        </div>
      </section>

      <section className='section is-primary-light is-fullwidth'>
        <h2 className='has-text-centered'>How can I help?</h2>
        <p className='has-text-centered'>
          As a freelance Shopify developer, Shopify partner and front-end consultant, I can help build your next business website or ecommerce website
        </p>
        <div className="columns is-centered home-service-blocks is-desktop">
          <div className="column">
            <ServiceBlockHome
              title="Shopify development &amp; support"
              img="/img/shopify_logo_black.png"
              imgAlt="Shopify logo"
              link="/freelance-shopify-developer"
              blurb="As a Shopify Partner, I can help with ecommerce websites on Shopify, store migrations, custom Shopify theme development and more."
            />
          </div>
          <div className="column">
            <ServiceBlockHome
                title="WordPress development"
                img="/img/wordpress-logo-alt.png"
                imgAlt="WordPress logo"
                link="/wordpress-consultancy"
                blurb="As a freelance WordPress developer, I can design and build WordPress themes, optimise your WordPress site, and help with SEO."
            />
          </div>
          <div className="column">
            <ServiceBlockHome
              title="Jamstack web development"
              img="/img/jamstack-logo.png"
              imgAlt="Shopify logo"
              link="/headless-wordpress-websites"
              blurb="I help build blazing fast, accessible &amp; beautiful websites using headless CMS's such as GraphCMS, using Jamstack technologies."
            />
          </div>
        </div>
      </section>

      <section className='section is-md'>
        <h2 className='has-text-centered'>Trusted by brands big and small</h2>
        <p className='has-text-centered'>
          I've been honoured to work with local and national brands to build
          marketing websites powered by WordPress
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

      <section className='section is-md home-section-ux'>
        <h2 className='has-text-centered'>Website design &amp; UX <br /> with marketing results in mind</h2>
        <br />
        <div className="columns is-multiline">
          <div className="column is-12-tablet is-12-desktop is-6-widescreen is-6-fullhd">
            <div className="columns is-multiline">
              <div className="column is-6">
                <div className="box is-primary">
                  <h3 className="title is-size-5 no-margin-top "><span className='icon fas fa-file-alt'></span>&nbsp;&nbsp;Content is king</h3>
                  <p>I'll help you build a website around well-planned content that strikes a chord with your customers.</p>
                </div>
              </div>
              <div className="column is-6">
                <div className="box is-primary">
                  <h3 className="title is-size-5 no-margin-top "><span className='icon fas fa-funnel-dollar'></span>&nbsp;&nbsp;CRO</h3>
                  <p>Together we'll maximise leads from your website through conversion rate optimisation.</p>
                </div>
              </div>
              <div className="column is-6">
                <div className="box is-primary">
                  <h3 className="title is-size-5 no-margin-top "><span className='icon fas fa-user-alt'></span>&nbsp;&nbsp;Clear user experience</h3>
                  <p>I'll help give customers the information they need simply and easily without getting in their way.</p>
                </div>
              </div>
              <div className="column is-6">
                <div className="box is-primary">
                  <h3 className="title is-size-5 no-margin-top "><span className='icon fas fa-directions'></span>&nbsp;&nbsp;Strong calls to action</h3>
                  <p>Let's make it easy for visitors to take next steps to contact you, make a purchase, make their next move.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-12-tablet is-12-desktop is-6-widescreen is-6-fullhd message">
            <img src="/img/wp-shopify-jamstack-logos.png" alt="WordPress, Jamstack and website logos" className="unstyled" />
            <p>Your business website is key to getting your message in front of your customers.</p>
            <p>A good website should be built with your audience in mind, geared towards their needs and drivers with strong calls to action and properly thought-out UX.</p>
            <p>I can help your business build that website, whether it's WordPress, Shopify ecommerce, or powerful static sites.</p>
            <p>
              <Link href='/contact'>
                <a className='button is-primary has-icon is-medium'>
                  <span>book a discovery call</span>
                  <span className='icon fas fa-chevron-circle-right'></span>
                </a>
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className='section is-md'>
        <div className='container'>
          <h2 className='has-text-centered'>Don't take my word for it</h2>
          <p className='has-text-centered'>
            I've been trusted by UK-wide and local Yorkshire businesses for
            years, <br />
            here's what they say about my work.
          </p>
          <br />
          <Testimonials />
        </div>
      </section>

      <section className='section is-md'>
        <div className='container'>
          <h2 className='has-text-centered'>Need some help?</h2>
          <p className='has-text-centered'>
            Whether you need a freelance web developer for your website project,
            or you're getting into code and need some personal support and
            mentorship, it costs absolutely nothing to start the conversation.
          </p>
          <br />
          <div className='columns has-text-centered is-variable is-desktop'>
            <div className='column is-5-desktop is-offset-1-desktop'>
              <Link href='/contact'>
                <a className='button is-primary has-icon is-medium'>
                  <span>discuss your project</span>
                  <span className='icon fas fa-chevron-circle-right'></span>
                </a>
              </Link>
            </div>
            <div className='column is-5-desktop'>
              <Link href='/mentorship'>
                <a className='button is-default has-icon is-medium'>
                  <span>discover mentorship</span>
                  <span className='icon fas fa-chevron-circle-right'></span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='section is-primary-alt is-md is-fullwidth no-margin-bottom' style={{marginBottom: "-2em !important"}}>
        <h2 className='has-text-centered is-white'>Latest articles</h2>
        <br />
        <div className='columns is-multiline is-variable is-1-tablet is-2-desktop is-3-widescreen'>
          {allPostsData
            .slice(0, 7)
            .map(({ id, date, title, featuredimage, description }) => {
              const isFeatured =
                allPostsData.map(post => post.id).indexOf(id) <= 2;
              return (
                <div
                  className={`column ${
                    isFeatured
                      ? 'is-12-touch is-offset-0-touch is-10-desktop is-offset-1-desktop is-4-widescreen is-offset-0-widescreen'
                      : 'is-6-tablet is-6-desktop is-6-widescreen is-3-fullhd'
                  }`}
                  key={id}
                >
                  <div className='card article-item'>
                    <div className='card-image'>
                      <Link href={`/blog/${id}`}>
                        <a>
                          <img
                            src={featuredimage}
                            alt={title}
                            className='unstyled'
                          />
                        </a>
                      </Link>
                    </div>
                    <div className='card-content'>
                      <DateDisplay
                        dateString={date}
                        className='has-text-grey-light has-text-uppercase'
                      />
                      <h3 className='subtitle is-size-4'>
                        <Link href={`/blog/${id}`}>
                          <a>{title}</a>
                        </Link>
                      </h3>
                      <p>
                        {isFeatured
                          ? description
                          : description.split(' ').slice(0, 15).join(' ') +
                            '...'}
                      </p>
                      <p className='has-text-right'>
                        <Link href={`/blog/${id}`}>
                          <a>read the full article</a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <br />
        <p className='has-text-centered'>
          <Link href='/blog'>
            <a className='button is-default has-icon is-medium is-outline'>
              <span>read more</span>
              <span className='icon fas fa-chevron-circle-right'></span>
            </a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData
    }
  };
}
