import './globals.css'

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
      <body className='bg-gray-900 text-white'>{children}</body>
    </html>
  )
}
