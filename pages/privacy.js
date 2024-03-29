import Layout from '../components/Layout';

const Privacy = () => {
  return (
    <Layout
      title='Privacy page | Rob Kendal, freelance developer'
      description='Rob Kendal values and respects your privacy. You can read my privacy policy here.'
    >
      <div className='container'>
        <h1>Privacy Policy</h1>

        <p>
          This Privacy Policy describes how your personal information is
          collected, used, and shared when you visit or make a purchase from
          https://robkendal.co.uk (the “Site”).
        </p>

        <h2>Personal information collected</h2>

        <p>
          When you visit the Site, we automatically collect certain information
          about your device, including information about your web browser, IP
          address, time zone, and some of the cookies that are installed on your
          device. Additionally, as you browse the Site, we collect information
          about the individual web pages or products that you view, what
          websites or search terms referred you to the Site, and information
          about how you interact with the Site. We refer to this
          automatically-collected information as “Device Information.”
        </p>

        <p>We collect Device Information using the following technologies:</p>

        <ul>
          <li>
            “Cookies” are data files that are placed on your device or computer
            and often include an anonymous unique identifier. For more
            information about cookies, and how to disable cookies, visit &nbsp;
            <a href='http://www.allaboutcookies.org'>
              http://www.allaboutcookies.org
            </a>
            .
          </li>
          <li>
            “Log files” track actions occurring on the Site, and collect data
            including your IP address, browser type, Internet service provider,
            referring/exit pages, and date/time stamps.
          </li>
          <li>
            “Web beacons,” “tags,” and “pixels” are electronic files used to
            record information about how you browse the Site.
          </li>
          <li>
            We use <a href='https://pirsch.io/'>Pirsch Analytics</a>, a
            privacy-first analytics provider, to monitor how users use and
            navigate the site to help improve the content
          </li>
        </ul>

        <p>
          Additionally when you make a purchase or attempt to make a purchase
          through the Site, we collect certain information from you, including
          your name, (where necessary) your address, email address, and phone
          number. We refer to this information as “Order Information.”
        </p>

        <p>
          When we talk about “Personal Information” in this Privacy Policy, we
          are talking both about Device Information and Order Information.
        </p>

        <h2>How is your personal information used</h2>

        <p>
          We use the Order Information that we collect generally to fulfill any
          orders placed through the Site (including processing your payment
          information, arranging for shipping, and providing you with invoices
          and/or order confirmations) and delivery of any services paid for,
          such as the [mentorship program](/mentorship). Additionally, we use
          this Order Information to:
        </p>

        <ul>
          <li>Communicate with you;</li>
          <li>Screen our orders for potential risk or fraud; and</li>
          <li>
            When in line with the preferences you have shared with us, provide
            you with information or advertising relating to our products or
            services.
          </li>
        </ul>

        <p>
          We use the Device Information that we collect to help us screen for
          potential risk and fraud (in particular, your IP address), and more
          generally to improve and optimize our Site (for example, by generating
          analytics about how our customers browse and interact with the Site,
          and to assess the success of our marketing and advertising campaigns).
        </p>

        <h2>Sharing your personal information</h2>

        <p>
          We share your Personal Information with third parties to help us use
          your Personal Information, as described above. For example, we use
          Stripe to collect payments for services, such as the mentorship
          program. We also use Pirsch Analytics to help us understand how our
          customers use the Site.
        </p>

        <p>
          Finally, we may also share your Personal Information to comply with
          applicable laws and regulations, to respond to a subpoena, search
          warrant or other lawful request for information we receive, or to
          otherwise protect our rights.
        </p>

        <h2>Do not track</h2>

        <p>
          Please note that we do not alter our Site’s data collection and use
          practices when we see a Do Not Track signal from your browser.
        </p>

        <h2>Your rights</h2>

        <p>
          If you are a European resident, you have the right to access personal
          information we hold about you and to ask that your personal
          information be corrected, updated, or deleted. If you would like to
          exercise this right, please contact us through the contact information
          below.
        </p>

        <p>
          Additionally, if you are a European resident we note that we are
          processing your information in order to fulfill contracts we might
          have with you (for example if you make an order through the Site), or
          otherwise to pursue our legitimate business interests listed above.
          Additionally, please note that your information will be transferred
          outside of Europe, including to Canada and the United States.
        </p>

        <h2>Data retention</h2>

        <p>
          When you place an order through the Site, we will maintain your Order
          Information for our records unless and until you ask us to delete this
          information.
        </p>

        <h2>Changes</h2>

        <p>
          We may update this privacy policy from time to time in order to
          reflect, for example, changes to our practices or for other
          operational, legal or regulatory reasons.
        </p>

        <h2>Contact us</h2>

        <p>
          For more information about our privacy practices, if you have
          questions, or if you would like to make a complaint, please contact us
          by e-mail at me@robkendal.co.uk.
        </p>
      </div>
    </Layout>
  );
};

export default Privacy;
