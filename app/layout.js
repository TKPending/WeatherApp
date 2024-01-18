import './globals.css';
export const metadata = {
  title: 'Weather App',
  description: 'Created by Group 1: Sophie, Jacob, Junaid and Tony',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
