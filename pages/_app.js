import { useEffect } from 'react';
import hljs from 'highlight.js';


// app styles
import '@fortawesome/fontawesome-free/css/all.css';
import '../styles/reset.css';
import '../styles/globals.css';
import '../styles/utils.css';
import '../styles/columns.sass';
import '../styles/layout.css';
import '../styles/buttons.css';
import '../styles/homepage.css';
import '../styles/overrides.css';

// code highlighting themes
import '../node_modules/highlight.js/styles/night-owl.css';

// responsiveness
import '../styles/responsive.css';

// utils
import { CommentsLoader } from '../lib/utils';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    CommentsLoader();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
