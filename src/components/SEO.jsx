import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, url, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="keywords" content={keywords} />{" "}
      {/* Added keywords meta tag */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
