import NextHead from 'next/head';

interface Props {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
}

export const Head = ({
  title,
  description,
  keywords,
  author,
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage,
}: Props) => (
  <NextHead>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="author" content={author} />
    <meta property="og:title" content={ogTitle} />
    <meta property="og:description" content={ogDescription} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={ogUrl} />
    <meta property="og:image" content={ogImage} />
    <meta property="theme-color" content="#0096FF" />
    <meta name="robots" content="follow, index" />
  </NextHead>
);

Head.defaultProps = {
  author: 'draxya',
  description: 'Thatcher Technologies Official Website',
  keywords: 'thatcher, technology, website, thatcher technologies',
  ogDescription: 'Thatcher Technologies Official Website',
  ogImage: 'https://thatcher.vercel.app/thatcher.png',
  ogTitle: '⚡️Thatcher Tech: Ready to production.',
  ogUrl: 'https://thatchertech.me/',
  title: 'Thatcher Technologies',
};
