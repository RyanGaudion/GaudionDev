
import { getAllBlogsInfo, getBlog } from '@/lib/blogHelper'
import { notFound } from 'next/navigation';
import BlogComponent from '@/components/Blog';


export async function generateStaticParams() {
    return getAllBlogsInfo()
}

export async function generateMetadata({ params, searchParams } : any) {
    const blog = getBlog(params.slug);

    return{
        title: blog?.meta?.title + " - Ryan Gaudion's Blog",
        description: blog?.meta?.description + " - Ryan Gaudion's Blog",
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
            <div className='mdx'>
                <BlogComponent blog={blog} />
            </div>
        </main>
    )

    /*
            <p>{JSON.stringify(props.slug)}</p>
            <br/>
            <p>{JSON.stringify(props.frontMatter)}</p>
            <br/>*/
}