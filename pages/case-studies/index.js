import Link from 'next/link';

// components
import Layout from '../../components/Layout';
import ContactForm from '../../components/ContactForm';

const caseStudyItems = [
  {
    id: 1,
    title: 'Stones 4 Homes',
    subTitle: 'Ecommerce WordPress build',
    img: 'stones4homes-screenshot.png',
    blurb: 'I helped deliver a brand new website design for this Yorkshire aggregate powerhouse. The new site lifted transaction rates by 100% and conversions by 200%',
    link: 'stones4homes',
  },
  {
    id: 2,
    title: 'Print Plus Direct',
    subTitle: 'Ecommerce WordPress build',
    img: 'printplusdirect-screenshot.png',
    blurb: 'Supplying NCR forms and stationery to businesses nationwide, I worked with Print Plus Direct on an ecommerce site that simplifies their complex product options and drives new leads to their business',
    link: 'printplusdirect',
  },
  {
    id: 3,
    title: 'CreateTVT',
    subTitle: 'Multisite theming',
    img: 'createtvt-screenshot.png',
    blurb: 'CreateTVT needed a multisite solution that combined a reusable branding theme with powerful hosting to support their multiple high-trafficked websites',
    link: 'createtvt',
  },
  {
    id: 4,
    title: 'Sneyds Wonderdog',
    subTitle: 'Ecommerce WordPress build',
    img: 'sneyds-screenshot.png',
    blurb: 'Sneyds supply premium dog and animal feeds. I helped them build a new ecommerce website that attracted 65% more traffic, growing monthly sales by 17%',
    link: 'wonderdog',
  },
  {
    id: 5,
    title: 'Andrea Hall',
    subTitle: 'Custom Shopify theme development',
    img: 'andreahall-screenshot.png',
    blurb: 'Andrea is an incredible local Yorkshire artist who creates art for open water swimmers. I built her a super speedy Shopify ecommerce website with custom Shopify theme development',
    link: 'andrea-hall',
  },
  {
    id: 6,
    title: 'Shepherds Purse',
    subTitle: 'Shopify theme development and support',
    img: 'shepherds-purse-screenshot.png',
    blurb: 'Shepherds Purse are an award-winning cheese maker here in Yorkshire. They needed UX consultancy and support on their Shopify store including improving their user journey and highlighing their awards',
    link: 'shepherds-purse-cheeses',
  },
]

const CaseStudies = () => {
  return (
      <Layout
          title='WordPress and Shopify website case studies | Rob Kendal, freelance web developer York'
          description='Discover how I used WordPress and Shopify to help local businesses to increase conversions by 200% and boost sales and lead generation through their websites'
      >
        <div className='container'>
          <h1>Case Studies</h1>
          <p>
            I've worked with some great clients over the years on a diverse range of {' ' }
            <Link href="/freelance-shopify-developer">Shopify</Link> {' '} and WordPress projects, both ecommerce and non-ecommerce business websites.
          </p>
          <p>
            You can explore a few of the more recent and challenging ones here. Investigate, view the sites, ask me any questions, and please get in touch if you'd like
            to know how I can achieve the same results for you and your business, including website consultation, strategy, custom Shopify development and more.
          </p>
        </div>

          <div className="columns is-multiline section">
            {
              caseStudyItems.reverse().map(item => (
                  <div className="column is-6-desktop is-12" key={item.id}>
                    <article className='card article-item' style={{"box-shadow": "3px 3px 20px rgba(87, 87, 87, 0.24)"}}>
                      <div className='card-image'>
                        <Link href={`/case-studies/${item.link}`}>
                          <a>
                            <img
                                src={`/img/case-studies/${item.img}`}
                                alt={`Screenshot of the ${item.title} website`}
                                className='unstyled'
                            />
                          </a>
                        </Link>
                      </div>
                      <div className='card-content'>
                        <p className='subtitle is-size-4 has-text-uppercase has-text-grey-light no-margin'>
                          {item.subTitle}
                        </p>
                        <h2 className='title is-size-2'>
                          <Link href={`/case-studies/${item.link}`}>
                            <a className='has-text-brand-alt'>
                              {item.title}
                            </a>
                          </Link>
                        </h2>
                        <p>
                          {item.blurb}
                        </p>
                        <p>
                          <Link href={`/case-studies/${item.link}`}>
                            <a className='button is-primary'>
                              Read the full story
                            </a>
                          </Link>
                        </p>
                      </div>
                    </article>
                  </div>
              ))
            }
          </div>

        <div className='container'>
          <h2 className="title is-size-3 has-text-centered">Tell me how I can help</h2>
          <ContactForm action='/contact/thanks' pageLocation='case studies list' />
        </div>
      </Layout>
  );
};

export default CaseStudies;
