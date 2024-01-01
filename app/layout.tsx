import type { Metadata } from 'next'
import '@styles/globals.css'
import { inter } from './ui/fonts/font'
import Theme from './ui/theme'
import Nav from './ui/nav'
import CustomContextProvider from './ui/customize/customContext/customContextProvider'
import GradientContextProvider from './ui/gradientContext'


export const metadata: Metadata = {
  title: 'VOXU : Elevate Every Interaction.',
  description: ' Elevate your user experience with MotionCraft Loader, a seamless application featuring stunning UI/UX animations powered by Framer Motion',
  keywords:'Framer Motion, UI/UX, Animation, Loading, Craftsmanship, Seamless Experience',
  
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <GradientContextProvider>
        <Theme/>
         <Nav/>
        <CustomContextProvider>
        {children}
        </CustomContextProvider>
        </GradientContextProvider>
        </body>
    </html>
  )
}
