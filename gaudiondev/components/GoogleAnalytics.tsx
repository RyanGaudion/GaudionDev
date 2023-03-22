'use client';

import {usePathname, useSearchParams} from 'next/navigation'
import Script from 'next/script'
import { useEffect } from "react";
import * as gtag from "@/lib/gtagHelper"

export default function GoogleAnalytics({GA_MEASUREMENT_ID} : {GA_MEASUREMENT_ID : string}){
    {/* Google Analytics*/}

    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        const url = pathname + searchParams.toString()
    
        gtag.pageview(GA_MEASUREMENT_ID, url);

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
            gtag('consent', 'default', {
                'analytics_storage': 'denied'
              });
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