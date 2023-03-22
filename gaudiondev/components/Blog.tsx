import { MDXRemote } from 'next-mdx-remote/rsc'
import { GetAllMDXComponents, GetMdxOptions } from "@/lib/mdxHelper";


export default function BlogComponent({blog} : any){
    return (
        <>
            <h1>{blog.meta.title}</h1>
            {/* @ts-expect-error Server Component*/}
            <MDXRemote source={blog.content} components={{...GetAllMDXComponents()}} options={{...GetMdxOptions()}} />
        </>
    )
}