import { useState, useContext, useEffect } from 'react'
import { SidebarContext } from '../../context/SidebarContext'
import Header from '../Header'
import Navbar from '../Navbar'
import Card from '../Card'
import Title from '../Title'
import Table from '../Table'

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [notificationOpen, setNotificationOpen] = useState(false)

  const notificationToggle = () => setNotificationOpen(old => !old)

  const sidebarToggle = () => setSidebarOpen(old => !old)

  return (
    <div className='flex'>
      {sidebarOpen && (
        <Navbar>
          <Navbar.Logo>
            <svg
              className='h-12 w-12'
              viewBox='0 0 512 512'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                className='fill-primary-500'
                d='M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z'
              ></path>
              <path
                className='fill-white'
                d='M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z'
              ></path>
            </svg>

            <span className='text-white text-2xl mx-2 font-semibold'>
              Painel
            </span>
          </Navbar.Logo>
          <Navbar.Link>
            <Navbar.Text>Teste</Navbar.Text>
          </Navbar.Link>
          <Navbar.Link>
            <Navbar.Text>Teste 2</Navbar.Text>
          </Navbar.Link>

          <div className='absolute top-0 right-0 p-3' onClick={sidebarToggle}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 fill-primary-500 hover:fill-white'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </Navbar>
      )}

      <main className='flex flex-col w-full'>
        <Header sidebarOpen={sidebarOpen} sidebarToggle={sidebarToggle} />
        <h1>testes</h1>
      </main>
    </div>
  )
}

export default Layout
