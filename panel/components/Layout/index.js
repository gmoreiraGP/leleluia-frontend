import { useState } from 'react'
import ProfileAvatar from '../ProfileAvatar'
import Logo from '../Logo'
import Navbar from '../Navbar'
import Card from '../Card'
import Title from '../Title'
import Table from '../Table'

const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [notificationOpen, setNotificationOpen] = useState(false)

    const sidebarToggle = () => setSidebarOpen(old => !old)
    const notificationToggle = () => setNotificationOpen(old => !old)

    return (
        <div>
            <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>

            <div className="flex h-screen bg-gray-200">
                <div className={
                    'fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden' +
                        sidebarOpen ? 'flex' : 'hidden'
                } onClick={sidebarToggle}>

                    <div className={
                        (sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in') +
                        "fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0"}>

                        <Logo />

                        <Navbar>
                            <Navbar.Link>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                                </svg>
                                <Navbar.Text>Painel</Navbar.Text>
                            </Navbar.Link>
                            <Navbar.Link>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                                </svg>
                                <Navbar.Text>Usuários</Navbar.Text>
                            </Navbar.Link>
                        </Navbar>
                    </div>
                </div>
                <div className="flex-1 flex flex-col overflow-hidden w-100">
                    <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
                        <div className="flex items-center">
                            <button onClick={sidebarToggle} className="text-gray-500 focus:outline-none lg:hidden">
                                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    </path>
                                </svg>
                            </button>
                        </div>

                        <div className="flex items-center">
                            <ProfileAvatar />
                        </div>
                    </header>
                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                        <div className="container mx-auto px-6 py-8">
                            <Title>Painel de controle | Leleluia Transportes</Title>
                            <div className="mt-4">
                                <div className="flex flex-wrap -mx-6">
                                    <Card>
                                        <Card.Icon>
                                            <svg className="h-8 w-8 text-white" viewBox="0 0 28 30" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
                                                    fill="currentColor"></path>
                                                <path
                                                    d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
                                                    fill="currentColor"></path>
                                                <path
                                                    d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
                                                    fill="currentColor"></path>
                                                <path
                                                    d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
                                                    fill="currentColor"></path>
                                                <path
                                                    d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
                                                    fill="currentColor"></path>
                                                <path
                                                    d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </Card.Icon>
                                        <Card.Info>
                                            <Card.Title>Titulo do card 1</Card.Title>
                                            <Card.Description>Descriçao de card 1</Card.Description>
                                        </Card.Info>
                                    </Card>

                                </div>
                            </div>

                            <div className="flex flex-col mt-8">
                                <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                                    <div
                                        className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <Table.Head>Name</Table.Head>
                                                    <Table.Head>Name</Table.Head>
                                                    <Table.Head>Name</Table.Head>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white">
                                                <tr>
                                                    <Table.Data>
                                                        <div className="text-sm leading-5 text-gray-900">Software Engineer</div>
                                                        <div className="text-sm leading-5 text-gray-500">Web dev</div>
                                                    </Table.Data>
                                                    <Table.Data>
                                                        <div className="text-sm leading-5 text-gray-900">Software Engineer</div>
                                                        <div className="text-sm leading-5 text-gray-500">Web dev</div>
                                                    </Table.Data>
                                                    <Table.Data>
                                                        <div className="text-sm leading-5 text-gray-900">Software Engineer</div>
                                                        <div className="text-sm leading-5 text-gray-500">Web dev</div>
                                                    </Table.Data>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div >
    )
}

export default Layout