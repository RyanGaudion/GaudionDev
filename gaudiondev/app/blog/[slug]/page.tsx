
import { getAllBlogsInfo, getBlog } from '@/lib/blogHelper'
import { notFound } from 'next/navigation';
import BlogComponent from '@/components/Blog';
import generateRssFeed from '@/lib/rssHelper';


export async function generateStaticParams() {
    await generateRssFeed(); //Don't delete
    return getAllBlogsInfo()
}

export async function generateMetadata({ params, searchParams } : any) {
    const blog = getBlog(params.slug);

    return{
        title: blog?.meta?.title,
        description: blog?.meta?.description,
    }
}

//Fix Any
export default function Blog({ params } :any) {
    const blog = getBlog(params.slug);

    if(!blog){
        return notFound;
    }

    return (
        <main className="wrapper">
            <article className='mdx'>
                <BlogComponent blog={blog} />
            </article>
        </main>
    )

    /*
            <p>{JSON.stringify(props.slug)}</p>
            <br/>
            <p>{JSON.stringify(props.frontMatter)}</p>
            <br/>*/
}