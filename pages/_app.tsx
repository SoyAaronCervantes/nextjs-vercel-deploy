import {ReactNode} from "react";
import '@/styles/globals.css'
import {AppPropsWithLayout} from "@/types/layout.types";

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
    const getLayout = Component?.getLayout || ((page: ReactNode) => page)
    return getLayout( <Component {...pageProps} /> )
  }

export default App;
