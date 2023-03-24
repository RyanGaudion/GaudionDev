import { MDXRemote } from 'next-mdx-remote/rsc'
import { GetAllMDXComponents, GetMdxOptions } from "@/lib/mdxHelper";
import {IoChevronBack} from "react-icons/io5";
import Link from 'next/link';

export default function BlogComponent({blog} : any){
    return (
        <>
            <Link href="/" className='w-min flex gap-4 mb-4 md:mb-5 cursor-pointer items-center no-underline group hover:text-white text-gray-400'>
                <IoChevronBack className='h-5 w-5 md:h-6 md:w-6 md:group-hover:scale-110'/>
                <p className='md:text-lg block my-0 md:group-hover:scale-110'>Home</p>
            </Link>
            <h1>{blog.meta.title}</h1>
            {/* @ts-expect-error Server Component*/}
            <MDXRemote source={blog.content} components={{...GetAllMDXComponents()}} options={{...GetMdxOptions()}} />
        </>
    )
}