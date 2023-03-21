
import CustomLink from "../components/mdx/CustomLink"
import YouTube from "../components/mdx/YouTube"
//import { CH } from '@code-hike/mdx/components'

import theme from "shiki/themes/material-default.json" // any theme from shiki
import { remarkCodeHike } from "@code-hike/mdx"


export function GetAllMDXComponents(){
    return {YouTube, a: CustomLink}//, CH}
}

export function GetMdxOptions(){
    return {
        mdxOptions: {
          remarkPlugins: [],//[[remarkCodeHike, { autoImport: false, theme }]],
          //useDynamicImport: true,
          rehypePlugins: [],
        }
    }
}