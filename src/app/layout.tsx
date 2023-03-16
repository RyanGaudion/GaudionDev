import './globals.css'

export const metadata = {
  title: 'Gaudion.Dev',
  description: 'Personal Portfolio of Ryan Gaudion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}