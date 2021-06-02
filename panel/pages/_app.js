import React from 'react'
import '../css/styles.css'
import { SidebarProvider } from '../context/SidebarContext'

const App = ({ Component, pageProps }) => {
    return (
        <SidebarProvider>
            <Component {...pageProps} />
        </SidebarProvider>
    )
}
export default App