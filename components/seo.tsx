import Head from "next/head";

import { seoData } from "../consts/seo";

interface Props {
  title: string;
  description: string;
  image: string;
  article: boolean;
}

const SEO = ({ title, description, image, article }: Props) => {
  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    titleTemplate,
  } = seoData;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}navid`,
  };

  return (
    <Head>
      <title>{titleTemplate.replace("%s", seo.title)}</title>
      <link rel="alternate" href={seo.url} hrefLang="en-us" />
      <link rel="alternate" href={seo.url} hrefLang="en" />
      <link rel="alternate" href={seo.url} hrefLang="x-default" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Head>
  );
};

export default SEO;
