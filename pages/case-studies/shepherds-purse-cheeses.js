
// components
import Layout from '../../components/Layout';
import ContactForm from '../../components/ContactForm';


const ShepherdsPurse = () => {
  return (
      <Layout
          title='Shepherds Purse Shopify support | Freelance Shopify expert, York'
          description='I helped award-winning artisan cheese makers, Shepherds Purse improve their Shopify stores UX and customer journey. Discover the details of my tailored Shopify support services in the case study.'
      >

        <div className="section home-hero">
          <div className="columns is-vcentered">

            <div className="column is-6">
              <h1>Shepherds Purse Cheeses</h1>
              <p>
                The Shepherds Purse are a Yorkshire-based artisan cheese maker, supplying their award-winning cheeses nationally. They needed help to improve their Shopify store and maximise their customer conversion rates.
              </p>
              <p>
                Learn more about <a href="https://www.shepherdspurse.co.uk/" target="__blank" rel="noopener noreferrer">Shepherds Purse</a> on their Shopify store.
              </p>
              <h2>The challenge</h2>
              <p>
                Shepherds Purse had a great Shopify store, but felt they weren't capitalising on their shopper journey and wanted to improve upsells, cross-sells and highlighting of their awards.
              </p>
            </div>
            <div className="column is-6">
              <img src="/img/case-studies/sp-cs.png" alt="Screenshot of AndreaHall website and backend" className="unstyled"/>
            </div>
          </div>
        </div>

        <div className="section is-secondary is-md">
          <div className="columns is-multiline">
            <div className="column is-6">
              <h2 className="is-white">How I helped</h2>
              <p>
                I worked with the Shepherds Purse team to identify several areas for improvement in their UX and UI across their Shopify store, mostly centered around their product pages. I worked on their bespoke Shopify theme to make
                changes that highlighted their cheeses' awards, made better use of their page space, and helped promote more of their pairing products for better upsells.
              </p>
              <p>
                We also made improvements to messaging and information highlighting around their basket and checkout areas. Finally, we added an improved order datepicker and introduced a multi-address shipping process.
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
                      Improved the customer journey and UX on their Shopify product pages
                    </span>
                  </li>
                  <li className='flex has-padding-bottom-sm'>
                    <span className="fab fa-shopify has-text-secondary has-padding-right-sm"/>
                    <span>
                      Custom Shopify theme work across their website
                    </span>
                  </li>
                  <li className='flex has-padding-bottom-sm'>
                    <span className="fas fa-truck has-text-secondary has-padding-right-sm"/>
                    <span>
                      Implemented multi-address shipping process in their checkout system
                    </span>
                  </li>
                  <li className='flex has-padding-bottom-sm'>
                    <span className="fas fa-life-ring has-text-secondary has-padding-right-sm"/>
                    <span>
                      Ongoing dedicated Shopify consultancy to support their store now and in the future
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

export default ShepherdsPurse;
