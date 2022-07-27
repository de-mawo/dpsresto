import Head from "next/head";
import siteMetadata from "./SiteMetaData";

const MetaSeo =  
   ({
  
    title,
    description,
    canonicalUrl,
    ogTwitterImage,
    ogImageUrl,
    ogType,
    children,
    

  
  }) => {
    return(
      <Head> 
 
  <title>{title}</title>
  <meta
      name="viewport"
      content="width=device-width, initial-scale=1"
  />
  <meta name="description" content={description} />
 
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content={siteMetadata.twitterHandle} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogTwitterImage} />
 
  <link rel="canonical" href={canonicalUrl} />

  <meta property="og:locale" content="en_US" />
  <meta property="og:site_name" content={siteMetadata.companyName} />
  <meta property="og:type" content={ogType} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImageUrl} />
  <meta property="og:url" content={canonicalUrl} />
  {children}
  </Head>
    )
  }


export default MetaSeo