import { MDXRemote } from 'next-mdx-remote/rsc'

import { getAllBlogsInfo, getBlog } from '@/lib/blogHelper'
import { GetAllMDXComponents } from "@/lib/mdxHelper";

import { notFound } from 'next/navigation';


export async function generateStaticParams() {
    return getAllBlogsInfo()
}

//Fix Any
export default function Blog({ params } :any) {
    const blog = getBlog(params.slug);

    if(!blog){
        return notFound;
    }

    return (
        <main className="wrapper">
            <div className='prose prose-sm md:prose-base lg:prose-lg prose-slate dark:prose-invert '>
                <h1>{blog.meta.title}</h1>
                {/* @ts-expect-error Server Component*/}
                <MDXRemote source={blog.content} components={{...GetAllMDXComponents()}} />
            </div>
        </main>
    )

    /*
            <p>{JSON.stringify(props.slug)}</p>
            <br/>
            <p>{JSON.stringify(props.frontMatter)}</p>
            <br/>*/
}