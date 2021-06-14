import { useState } from 'react'
import Head from 'next/head'
import Navbar from '../Navbar'
import Header from '../Header'

const Layout = ({ children, title }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const sidebarToggle = () => setSidebarOpen(old => !old)

  return (
    <div className='flex'>
      <Head>
        <link rel='icon' type='image/png' href='/truck.png' />
        <title>Leleluia Transportes | {title}</title>
      </Head>
      {sidebarOpen && <Navbar sidebarToggle={sidebarToggle} />}

      <main className='flex flex-col w-full'>
        <Header sidebarOpen={sidebarOpen} sidebarToggle={sidebarToggle} />
        {children}
      </main>
    </div>
  )
}

export default Layout
