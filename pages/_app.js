import { useEffect } from 'react';
import '../styles/vendor/bootstrap/css/bootstrap.min.css'
import '../styles/vendor/remixicon/remixicon.css'
import 'react-tabs/style/react-tabs.css'
import '../styles/main.css'
import '../styles/responsive.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("../styles/vendor/bootstrap/js/bootstrap.bundle.min.js");
  
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
