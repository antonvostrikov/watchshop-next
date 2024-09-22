import { Open_Sans, Raleway, Roboto } from 'next/font/google'

export const open_sans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['400', '600', '700']
})

export const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['400', '500', '600']
})

export const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['500']
})