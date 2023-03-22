import addMdx from '@next/mdx';
import nextMdx from "@next/mdx";


/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
  experimental: {
    appDir: true,
    mdxRs: true,
  },
}

const mdxOptions = {
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  }
  // If you use `MDXProvider`, uncomment the following line.
  // providerImportSource: "@mdx-js/react",
}

addMdx(nextConfig, mdxOptions)

const withMDX = nextMdx(mdxOptions);



export default withMDX(nextConfig);
