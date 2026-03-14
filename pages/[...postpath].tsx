import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { getPostByPath, type Post } from '../data/posts';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const pathArr = ctx.query.postpath as Array<string>;
	const path = pathArr.join('/');
	const fbclid = ctx.query.fbclid;
	const referringURL = ctx.req.headers?.referer || null;

	const post = getPostByPath(pathArr);

	if (!post) {
		return { notFound: true };
	}

	// Jika ada redirectUrl dan visitor dari Facebook → redirect ke URL tujuan
	if (post.redirectUrl && (referringURL?.includes('facebook.com') || fbclid)) {
		return {
			redirect: {
				permanent: false,
				destination: post.redirectUrl,
			},
		};
	}

	return {
		props: {
			path,
			post,
			host: ctx.req.headers.host,
		},
	};
};

interface PostProps {
	post: Post;
	host: string;
	path: string;
}

const Post: React.FC<PostProps> = (props) => {
	const { post, host, path } = props;
	const imageUrl = post.image.startsWith('http')
		? post.image
		: `https://${host}${post.image}`;

	return (
		<>
			<Head>
				<title>{post.title}</title>
				<meta property="og:title" content={post.title} />
				<meta property="og:description" content={post.excerpt} />
				<meta property="og:url" content={`https://${host}/${path}`} />
				<link rel="canonical" href={`https://${host}/${path}`} />
				<meta property="og:type" content="article" />
				<meta property="og:locale" content="id_ID" />
				<meta property="og:site_name" content={host.split('.')[0]} />
				<meta property="article:published_time" content={post.dateGmt} />
				<meta property="article:modified_time" content={post.modifiedGmt} />
				<meta property="og:image" content={imageUrl} />
				<meta property="og:image:alt" content={post.imageAlt} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
			</Head>
			<div className="post-container">
				<h1>{post.title}</h1>
				<img src={imageUrl} alt={post.imageAlt} style={{ maxWidth: '100%' }} />
				<article dangerouslySetInnerHTML={{ __html: post.content }} />
			</div>
		</>
	);
};

export default Post;
