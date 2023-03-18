//@ts-nocheck

'use client';


import Script from 'next/script'




export default function CookieBanner(){
    /*
        gtag('consent', 'update', {
            'analytics_storage': 'granted'
        });
    */

   

    return (
        <>
            <Script id='google-analytics-consent' strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                __html: `
                function consentGranted() {
                    gtag('consent', 'update', {
                        'analytics_storage': 'granted'
                    });
                    console.log("Working");
                }
                `,
            }} />

            <div className="w-min absolute bottom-0 mx-auto left-0 right-0">
                <button onClick={() => {window["consentGranted"]() ;}}>Yes</button>
            </div>
        </>

        



    )
}