import './globals.css'
import GoogleAnaytics from '@/components/GoogleAnalytics';
import CookieBanner from '@/components/CookieBanner';

export const metadata = {
  title: 'Ryan Gaudion - Software Development Portfolio & Programming Blog',
  description: 'Hi, I\'m Ryan Gaudion a UK based Software Developer. Here is my personal portfolio site and blog written in Next.JS.',
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
