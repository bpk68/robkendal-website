// import { useEffect } from 'react';
import Link from 'next/link';

// helpers
// import {CalendlyLoader} from '../../lib/utils';

// components
import Layout from '../../components/Layout';
import ContactForm from '../../components/ContactForm';

const Contact = () => {

  // useEffect(() => {
  //   CalendlyLoader('rk-calendly-embed');
  // }, []);

  return (
    <Layout
      title='Contact Rob Kendal | Freelance Shopify developer in York, Selby, Leeds'
      description="Contact Rob Kendal about your next Shopify website project, WordPress website, or if you're a developer looking for a coding mentor"
    >
      <div className='container'>
        <h1>Let's talk!</h1>
        <p>
          Ready to talk about your business website needs, or your next WordPress or Shopify project? Need help with a web
          development support and maintenance? Or want to know more about my{' '}
          <Link href='/mentorship'>
            <a>coding mentorship support</a>
          </Link>
          ?
        </p>
        <p>You can book a 15 min discovery slot directly on <a href="https://www.calendar.com/ark-labs/30-min-meeting/" target="_blank" noreferrer noopener>my calendar here</a>, or fill in the form below and I'll be in touch within 24 hours.</p>
        <p>
          Send me a message below and{' '}
          <strong>I'll get back to you within 24 hours</strong>
        </p>
        <ContactForm action='/contact/thanks' />
        <br />
        {/*<p><small>listed on <a href="https://www.citationsbooster.co.uk/" target="__blank" noreferrer noopener>Listed in Citations Booster</a> and <a href="https://www.uksmallbusinessdirectory.co.uk/" target="__blank" noreferrer noopener>Business Directory</a></small></p>*/}
      </div>
    </Layout>
  );
};

export default Contact;
