
// components
import Layout from '../../components/Layout';
import ContactForm from '../../components/ContactForm';


const AndreaHall = () => {
  return (
      <Layout
          title='Andrea Hall Shopify ecommerce website | Rob Kendal, freelance Shopify developer York'
          description='Discover how I the Shopify platform with custom Shopify theme development to build Yorkshire artist, Andrea Hall, a new website to replace her Etsy store'
      >

        <div className="section home-hero">
          <div className="columns is-vcentered">

            <div className="column is-6">
              <h1>Andrea Hall</h1>
              <p>
                Andrea Hall is a talented Yorkshire artist and active open water swimmer. She creates a range of art for the swimmer community such as greetings cards,
                prints, stationery and more.
              </p>
              <p>
                Check out <a href="https://www.andreahall.co.uk/" target="__blank" rel="noopener noreferrer">Andrea's website</a> here.
              </p>
              <h2>The challenge</h2>
              <p>
                Andrea had a personal portfolio website and a separate Etsy store. Tired of the hassle of maintaining two separate sites and paying expensive sales percentages
                to Etsy, she wanted to combine her online presences into a single, unified experience for both her and the customer.
              </p>
              <p>
                The customer would get a single, streamlined ecommerce site to browse and make purchases, whilst Andrea would be able to manage all her content, products, after-sales care and admin in one place.
              </p>
            </div>
            <div className="column is-6">
              <img src="/img/case-studies/ah-cs.png" alt="Screenshot of AndreaHall website and backend" className="unstyled"/>
            </div>
          </div>
        </div>

        <div className="section is-primary-light is-fullwidth is-md">
          <div className="columns is-multiline">
            <div className="column is-6">
              <h2 className="">How I helped</h2>
              <p>
                I started with Andrea's existing portfolio website which was powered by WordPress and developed a custom Shopify theme that focussed on her artwork products.
                We used the Shopify platform to manage content and product information whilst developing a great-looking, clean Shopify theme that focussed on the customer and their needs as they browsed the site.
              </p>
              <p>
                Andrea had quite a back catalogue of products on Etsy, so part of the challenge was to migrate these existing products into Shopify, where they could marry up with the newly designed and built custom Shopify theme.
              </p>
              <p>
                The last part of the puzzle was to integrate Andrea's current marketing workflows into her new Shopify store, including newsletter collection, MailChimp automation, and flesh out her customer reviews system.
              </p>
            </div>
            <div className="column is-6">
              <br />
              <div className="box">
                <h2>Project highlights</h2>
                <ul className='unstyled'>
                  <li className='flex has-padding-bottom-sm'>
                    <span className="fa fa-window-maximize has-text-secondary has-padding-right-sm"/>
                    <span>
                      Developed a new Shopify ecommerce website that simplifies the customer journey to maximise conversions
                    </span>
                  </li>
                  <li className='flex has-padding-bottom-sm'>
                    <span className="fab fa-shopify has-text-secondary has-padding-right-sm"/>
                    <span>
                      Designed and built a custom Shopify theme to suit Andrea's business goals
                    </span>
                  </li>
                  <li className='flex has-padding-bottom-sm'>
                    <span className="fa fa-tachometer-alt has-text-secondary has-padding-right-sm"/>
                    <span>
                      Deployed optimised, SEO-friendly Shopify theme which ranks well on the Google Lighthouse site speed scale
                    </span>
                  </li>
                  <li className='flex has-padding-bottom-sm'>
                    <span className="fab fa-mailchimp has-text-secondary has-padding-right-sm"/>
                    <span>
                      Integrated ecommerce solution with MailChimp
                    </span>
                  </li>
                  <li className='flex has-padding-bottom-sm'>
                    <span className="fab fa-etsy has-text-secondary has-padding-right-sm"/>
                    <span>
                      Custom product migration from existing Etsy catalogue to new website
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='section'>
          <div className="container">
            <h2 className="title is-size-3 has-text-centered">Tell me about your project</h2>
            <ContactForm action='/contact/thanks' pageLocation='Andrea Hall case study' />
          </div>
        </div>
      </Layout>
  );
};

export default AndreaHall;
