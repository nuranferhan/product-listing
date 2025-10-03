import localFont from 'next/font/local';

export const avenir = localFont({
  src: [
    {
      path: '../../public/fonts/Avenir/Avenir-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Avenir/Avenir-Book.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Avenir/Avenir-Roman.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Avenir/Avenir-Medium.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Avenir/Avenir-Heavy.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-avenir',
  display: 'swap',
});

export const montserrat = localFont({
  src: [
    {
      path: '../../public/fonts/Montserrat/Montserrat-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Montserrat/Montserrat-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Montserrat/Montserrat-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Montserrat/Montserrat-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Montserrat/Montserrat-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Montserrat/Montserrat-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-montserrat',
  display: 'swap',
});