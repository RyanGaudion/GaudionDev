import './globals.css'
import GoogleAnaytics from '@/components/GoogleAnalytics';
import { Analytics }  from '@vercel/analytics/react';
import CookieBanner from '@/components/CookieBanner';
import { Metadata } from 'next';

export const metadata : Metadata = {
  title: 'Ryan Gaudion: Software Developer Portfolio & Programming Blog',
  description: 'Hi, I\'m Ryan Gaudion: Software Developer, Video Creator & Blogger. Writing about tech topics, including Raspberry Pis and Software Development.',
  openGraph : {
    siteName : "Ryan Gaudion"
  },
  alternates : {
    canonical: "http://gaudion.dev/",
    types: {
      'application/rss+xml': [
        { url: 'rss.xml', title: 'Gaudion.Dev RSS Feed' }
      ],
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en-GB">
      <GoogleAnaytics GA_MEASUREMENT_ID='G-9N7KFV3730'/>
      <body className='bg-gray-900 text-white'>
        {children}
        <CookieBanner/>
      </body>
      <Analytics/>
    </html>
  )
}
