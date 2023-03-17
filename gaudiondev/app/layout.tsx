import './globals.css'
import GoogleAnaytics from '@/components/GoogleAnalytics';

export const metadata = {
  title: 'Gaudion.Dev',
  description: 'Ryan Gaudion\'s Personal Portfolio Site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <GoogleAnaytics GA_MEASUREMENT_ID='G-9N7KFV3730'/>

      <body className='bg-gray-900 text-white'>{children}</body>
    </html>
  )
}
