import '../styles/globals.css'
import '../styles/main.css'
import '../styles/util.css'
import '../vendor/bootstrap/css/bootstrap.min.css'
import '../fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../fonts/iconic/css/material-design-iconic-font.min.css'
import '../fonts/linearicons-v1.0.0/icon-font.min.css'
import '../vendor/animate/animate.css'
import '../vendor/css-hamburgers/hamburgers.min.css'
import '../vendor/animsition/css/animsition.min.css'
import '../vendor/select2/select2.min.css'
import '../vendor/daterangepicker/daterangepicker.css'
import '../vendor/slick/slick.css'
import '../vendor/MagnificPopup/magnific-popup.css'
import '../vendor/perfect-scrollbar/perfect-scrollbar.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
