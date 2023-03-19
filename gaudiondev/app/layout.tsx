import './globals.css'
import GoogleAnaytics from '@/components/GoogleAnalytics';
import CookieBanner from '@/components/CookieBanner';

export const metadata = {
  title: 'Ryan Gaudion - Software Development Portfolio & Programming Blog',
  description: 'Personal Portfolio Site with blogs about software development. Written in Next JS by Ryan Gaudion.',
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
    </html>
  )
}
