import './globals.css'
import Script from 'next/script'
import { useRouter } from 'next/router';
import { useEffect } from "react";
import * as gtag from "../lib/gtag"


export const metadata = {
  title: 'Gaudion.Dev',
  description: 'Ryan Gaudion\'s Personal Portfolio Site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  {/* Google Analytics*/}
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  {/* -- End - Google Analytics -- */}

  
  return (
    <html lang="en-GB">
      {/* Google Analytics*/}
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-9N7KFV3730"/>
      <Script id='google-analytics' strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9N7KFV3730', {
            page_path: window.location.pathname,
          });
          `,
        }}
      />
      {/* -- End - Google Analytics -- */}


      <body className='bg-gray-900 text-white'>{children}</body>
    </html>
  )
}
