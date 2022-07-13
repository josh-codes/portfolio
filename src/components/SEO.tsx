import React from 'react';
import config from '../config.json';

export const SEO = () => {
	return (
		<>
			{/* Primary Meta Tags */}
			<title>{config.seo.title}</title>
			<meta name='title' content={config.seo.title}/>
			<meta name='description' content={config.seo.description}/>
			<meta name='keywords' content={config.seo.keywords.join(', ')}/>
			<meta name='robots' content='index,follow'/>
			<meta name='language' content='English'/>
			<meta name='revisit-after' content={config.seo.crawl_every + ' days'}/>
			<meta name='author' content={config.seo.author}/>
			{/* Open Graph / Facebook */}
			<meta property='og:type' content='website'/>
			<meta property='og:url' content={config.seo.url}/>
			<meta property='og:title' content={config.seo.title}/>
			<meta property='og:description' content={config.seo.description}/>
			{/* Twitter */}
			<meta property='twitter:card' content='summary_large_image'/>
			<meta property='twitter:url' content={config.seo.url}/>
			<meta property='twitter:title' content={config.seo.title}/>
			<meta property='twitter:description' content={config.seo.description}/>
		</>
	);
};