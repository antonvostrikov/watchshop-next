import { Open_Sans, Raleway, Roboto, Roboto_Condensed } from 'next/font/google'

export const roboto_cond = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
  weight: ['300']
})

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
  weight: ['300','400', '500']
})

