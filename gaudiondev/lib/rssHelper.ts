import RSS from 'rss';
import { getAllBlogs } from './blogHelper';
import fs from 'fs';
import path from 'path';

export default async function generateRssFeed() {
    const site_url = 'gaudion.dev';

    const allPosts = getAllBlogs();


    const feedOptions = {
        title: 'Gaudion.Dev',
        description: 'Welcome to Gaudion.Dev a place for blogs and tutorials about tech & finance topics, including Raspberry Pis and Software Development.',
        site_url: site_url,
        feed_url: `${site_url}/rss.xml`,
        image_url: `${site_url}/img/favicon.png`,
        pubDate: new Date(),
        copyright: `All rights reserved ${new Date().getFullYear()}, Ryan Gaudion`,
       };

    const feed = new RSS(feedOptions);

    allPosts.map((post) => {
        if(post && post.meta.title && post.meta.description && post.meta.date){
            feed.item({
                title: post.meta.title,
                description: post.meta.description,
                url: `${site_url}/blog/${post.slug}`,
                date: post.meta.date,
            });
        }
    });

    const fullFilePath = path.join(process.cwd(), 'public', 'rss.xml')

    // remove the old file
    if (fs.existsSync(fullFilePath)) {
        await fs.promises.unlink(fullFilePath)
    }

    fs.writeFileSync(fullFilePath, feed.xml({ indent: true }));
}