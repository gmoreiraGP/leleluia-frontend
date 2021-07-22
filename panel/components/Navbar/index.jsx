import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { NavWrapper, NavbarLogo, NavbarTextHeader, NavLogoTitle, NavbarLinkWrapper, NavbarLink, NavbarText, NavbarIcon } from './style'
import { MdArrowBack, MdArrowForward, MdHome, MdPerson, MdReceipt, MdPowerSettingsNew } from 'react-icons/md'

const Navbar = () => {
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const sidebarToggle = () => setSidebarOpen(old => !old)

  return (
    <NavWrapper sidebarOpen={sidebarOpen}>
      <NavbarLogo>
        <Image src='/truck.svg' alt='Leleluia' width='50' height='50' />
        { sidebarOpen && <NavLogoTitle title>Leleluia Transportes</NavLogoTitle>}
      </NavbarLogo>
      <NavbarTextHeader onClick={() => sidebarToggle()}>
      {sidebarOpen ? 
        <>
          <NavLogoTitle>Painel de Controle</NavLogoTitle>
          <NavbarIcon arrow={true}>
            <MdArrowBack size={35} />
          </NavbarIcon>
        </> : 
          <NavbarIcon arrow={true}>
            <MdArrowForward size={35} />
          </NavbarIcon>
      }
      </NavbarTextHeader>
      <NavbarLinkWrapper>
        <Link href='/painel'>
          <NavbarLink className={router.pathname === '/painel' ? "active" : ""}>
            <NavbarIcon>
              <MdHome size={35}/>
            </NavbarIcon>
            {sidebarOpen && <NavbarText>início</NavbarText>}
          </NavbarLink>
        </Link>
        <Link href='/painel/usuarios'>
          <NavbarLink className={router.pathname === '/painel/usuarios' ? "active" : ""}>
            <NavbarIcon>
              <MdPerson size={35}/>
            </NavbarIcon>
            {sidebarOpen && <NavbarText>Usuários</NavbarText>}
          </NavbarLink>
        </Link>
        <Link href='/painel/notas'>
          <NavbarLink className={router.pathname === '/painel/notas' ? "active" : ""}>
            <NavbarIcon>
              <MdReceipt size={35}/>
            </NavbarIcon>
            {sidebarOpen && <NavbarText>Notas Fiscais</NavbarText>}
          </NavbarLink>
        </Link>
        <NavbarLink logout>
          <NavbarIcon>
            <MdPowerSettingsNew size={35}/>
          </NavbarIcon>
          {sidebarOpen && <NavbarText>Sair</NavbarText>}
        </NavbarLink>
      </NavbarLinkWrapper>
    </NavWrapper>
  )
}

export default Navbar
