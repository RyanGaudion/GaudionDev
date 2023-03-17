'use client';

import {usePathname, useSearchParams} from 'next/navigation'
import Script from 'next/script'
import { useEffect } from "react";
import * as gtag from "@/lib/gTag"

interface GoogleAnalyticsProps{
    GA_MEASUREMENT_ID : string
}


export default function GoogleAnaytics({GA_MEASUREMENT_ID} : GoogleAnalyticsProps){
    {/* Google Analytics*/}

    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        const handleRouteChange = (url: any) => {
        gtag.pageview(GA_MEASUREMENT_ID, url);
        };

        const url = pathname + searchParams.toString()
    
        handleRouteChange(url)
    }, [pathname, searchParams, GA_MEASUREMENT_ID]);
    {/* -- End - Google Analytics -- */}

    return (
        // Google Analytics
        <>
         <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}/>
         <Script id='google-analytics' strategy="afterInteractive"
            dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
            });
            `,
            }}
        />
        </>
       
        // -- End - Google Analytics --
    )
}