
import CustomLink from "../components/mdx/CustomLink"
import YouTube from "../components/mdx/YouTube"


import rehypeHighlight from "rehype-highlight";
import remarkGfm from 'remark-gfm'



export function GetAllMDXComponents(){
    return {YouTube, a: CustomLink}//, code: Code}
}

export function GetMdxOptions(){
    return {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeHighlight],
        }
    }
}