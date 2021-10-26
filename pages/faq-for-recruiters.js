import Link from 'next/link';

// components
import Layout from '../components/Layout';

const RecruiterFaq = () => {
  return (
    <Layout
      title='Recruitment FAQ | Rob Kendal, freelance developer'
      description='Answers to the most frequently asked questions I get from recruiters'
    >
      <div className='container'>
        <h1>FAQ for recruiters</h1>
        <p>
          Well hello there. If you've found me via a social network or have
          simply been pointed here via my own fair hand, please take the time to
          read the information I've put together on this page.
        </p>

        <p>
          It's not a massive read, but it should cover a lot of the common
          points that I get asked about when talking to recruiters. Whilst I do
          love talking to people and I'm always happy to talk about my work, I
          have a lot of very similar conversations with a lot of recruiters and
          I simply want to save us both some time getting to know if we're a
          good fit.
        </p>

        <p>Before we start, here are a few important links:</p>

        <ul>
          <li>
            <a href=' https://www.visualcv.com/rob-kendal-freelancer/'>
              My up to date CV
            </a>{' '}
            – made with Visual CV.
          </li>
          <li>
            <a href='https://www.linkedin.com/in/robkendal/'>
              My LinkedIn profile
            </a>
          </li>
          <li>
            My email address,{' '}
            <a href='mailto:me@robkendal.co.uk'>me[at]robkendal.co.uk</a> or <a href='mailto:rob@ark-labs.co.uk'>rob[at]ark-labs.co.uk</a> (my business address).
          </li>
        </ul>

        <h2>Are you looking for work at the moment?</h2>

        <p>Yep.</p>

        <p>
          I am able to take on contract and software development consultancy roles alongside my freelance work as a {' '}
          <Link href='/freelance-shopify-developer'>
            <a>freelance Shopify consultant</a>
          </Link>
          .
        </p>

        <h2>What does your ideal contract or consultancy role look like?</h2>

        <p>
          I'm all about culture and the people that make up the company. It's
          hard to really define something as abstract as culture, but as a
          general rule, what I look for includes:
        </p>

        <ul>
          <li>
            Working with modern technologies and approaches to problem-solving
          </li>
          <li>Contract or short-term consultancy roles</li>
          <li>
            Strong team unity with opportunities to learn, grow, and support
            each other
          </li>
          <li>Agile development environments</li>
          <li>
            Independence and empowerment to tackle problems with a level of
            autonomy
          </li>
          <li>High levels of trust in employees</li>
          <li>Flexible hours</li>
          <li>Remote working conditions</li>
          <li>
            Work-life balance. 40 hours (and less) is more than enough time to devote to a
            working week.
          </li>
        </ul>

        <p>
          As a slightly more concrete example of a really ace company that's
          nailed the culture, check out{' '}
          <a href='https://www.hubspot.com/jobs'>Hubspot's careers page</a>{' '}
          where they even have their own culture code.
        </p>

        <h2>Do you have a preferred technology stack?</h2>

        <p>
          Most of my work now is in frontend technologies, largely based in
          JavaScript. My current, general tech stack looks like this:
        </p>

        <ul>
          <li>JAMstack (JavaScript, API's, Markup)</li>
          <li>React (or Vue)</li>
          <li>ES6/7 JavaScript</li>
          <li>Next.js</li>
          <li>React.js</li>
          <li>
            CSS – both vanilla and preprocessors (SASS) using modern layouts,
            such as grid or flexbox
          </li>
          <li>CSS frameworks such as Bulma, Foundation, Bootstrap, Tailwind</li>
          <li>Bundlers such as Webpack or Parcel</li>
          <li>Accessible, semantic HTML</li>
        </ul>

        <h2>What sort of experience do you have?</h2>

        <p>
          I've been in the IT industry for over 15 years, most of that as a
          developer. I started in full stack development using the Microsoft
          (MS) tech stack of C#, ASP.Net 2.0. In more recent years, I have been
          a senior frontend developer specialising in performant websites using
          the latest JavaScript and frameworks, such as React and Vue.
        </p>

        <p>
          You can read a little more about me and my history in the following
          places:
        </p>

        <ul>
          <li>
            <a href='https://robkendal.co.uk/about/'>About me page</a>
          </li>
          <li>
            <a href='https://www.visualcv.com/rob-kendal-freelancer/'>My Visual CV</a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/robkendal/'>
              My LinkedIn profile
            </a>
          </li>
        </ul>

        <h2>What are your consultancy rates?</h2>

        <p>Culture and project fit are a big deal and will always come above day rates.</p>

        <p>
          That said, I have previously worked on a consultancy day rate between &pound;450 + VAT and &pound;600 + VAT.
        </p>

        <h2>Are you willing to relocate for the right role?</h2>

        <p>No.</p>

        <h2>What sort of locations are you able to work in?</h2>

        <p>
          Living in <strong>Selby, North Yorkshire</strong>, I'm happy for very occasional travel to within 30-40 mins of my home:
        </p>

        <p>(In preferential order)</p>

        <ul>
          <li>Selby</li>
          <li>York</li>
          <li>Leeds</li>
          <li>Beverley and Hull</li>
        </ul>

        <p>
          Of course, fully remote options are the future and I've been fully remote for well over 3 years :)
        </p>

        <h2>I've come across your CV on 'XYZ' can we have a quick call?</h2>

        <p>I'll have to politely decline, initially.</p>

        <p>
          I am more than happy to have a conversation about opportunities over
          the phone, but it has to be at a mutually agreed time. I don't answer
          cold calls during my working day as it interrupts development work.
        </p>

        <p>I prefer to avoid phone calls initially because:</p>

        <ul>
          <li>
            There is a lot of information already on this page that can be used
            to sift me in or out of a potential opportunity – thus saving
            everyone time.
          </li>
          <li>
            I prefer email as my primary mode of communication so please shoot
            me an email which includes the following information:
          </li>
          <ul>
            <li>The job spec</li>
            <li>Rates and project information</li>
            <li>
              <strong>A subject line of 'React is ace!'</strong> so that I know
              you've made it this far onto the page. You will always get a reply
              from me!
            </li>
          </ul>
        </ul>

        <h2>Can you send me an up to date copy of your CV?</h2>

        <p>
          I could, but you can always view the latest, most up to date version
          of my CV on{' '}
          <a href='https://www.visualcv.com/rob-kendal-freelancer/'>
            my Visual CV page
          </a>
          .
        </p>

        <p>You can also download it in PDF format from there.</p>

        <p>
          Alternatively,{' '}
          <a href='https://www.linkedin.com/in/robkendal/'>
            my LinkedIn profile
          </a>{' '}
          is always kept as a living experience document so that it matches my
          work history, current projects and achievements.
        </p>

        <h2>Do you have your CV in PDF/Word/XYZ format?</h2>

        <p>
          Again, you can download a PDF version of my CV from{' '}
          <a href='https://www.visualcv.com/rob-kendal-freelancer/'>
            my Visual CV page
          </a>
          .
        </p>

        <p>
          I'm afraid I don't keep a copy in any other formats because I don't
          have access to MS Word and I'm not comfortable providing my CV in an
          editable format.
        </p>

        <p>
          However, I'm happy to alter anything to suit, if you give me a heads
          up.
        </p>

        <h2>What is your notice period?</h2>

        <p>It depends on if I'm currently working on several large-scale projects or within a contract position at the moment. If you drop me a line I'll be happy to update you on my current situation.</p>
      </div>
    </Layout>
  );
};

export default RecruiterFaq;
