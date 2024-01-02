import Navbar from '@/components/Navbar'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["100", "400", "500", "700"],
  variable: '--font-roboto'
})

export const metadata = {
  title: 'Hello Next.js',
  description: 'Generated by create next app',
}

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      {/* <body className={roboto.className}> */}
      <body className={`${roboto.variable} font-roboto`}>
        {/* <nav>
          <a href="">Home</a>
          <a href="">About</a>
        </nav> */}
        {children}
        {/* <footer>This is footer</footer> */}
      </body>
    </html>
  )
}
export default RootLayout;