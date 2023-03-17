import { MDXRemote } from 'next-mdx-remote/rsc'

import { getAllBlogsInfo, getBlog } from '@/lib/blogHelper'
import { GetAllMDXComponents } from "@/lib/mdxHelper";


export async function generateStaticParams() {
    return getAllBlogsInfo()
}

//Fix Any
export default function Blog({ params } :any) {
    const props = getBlog(params.slug);

    return (
        <main className="wrapper">
            <div className='prose prose-sm md:prose-base lg:prose-lg prose-slate dark:prose-invert '>

                {/* @ts-expect-error Server Component*/}
                <MDXRemote source={props.content} components={{...GetAllMDXComponents()}} />
            </div>
        </main>
    )

    /*
            <p>{JSON.stringify(props.slug)}</p>
            <br/>
            <p>{JSON.stringify(props.frontMatter)}</p>
            <br/>*/
}