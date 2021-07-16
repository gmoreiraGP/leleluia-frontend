import Link from 'next/link'
import Image from 'next/image'
import {NavWrapper, NavbarLogo, NavbarLogoWrapper, NavLogoTitle, NavbarCloseIcon, NavbarLinkWrapper, NavbarLink, NavbarText} from './style'
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'

const Navbar = ({ sidebarToggle }) => {
  return (
    <NavWrapper>
      <NavbarLogo>
        <NavbarLogoWrapper>
          <Image src='/truck.svg' alt='Leleluia' width='50' height='50' />
          <NavLogoTitle>Painel</NavLogoTitle>
        </NavbarLogoWrapper>
      </NavbarLogo>
      <NavbarCloseIcon onClick={sidebarToggle}>
        <ChevronDoubleLeftIcon />
      </NavbarCloseIcon>
      <NavbarLinkWrapper>

      <Link href='/painel/usuarios'>
        <NavbarLink>
          <NavbarText>Usuários</NavbarText>
        </NavbarLink>
      </Link>
      <Link href='/painel/notas'>
        <NavbarLink>
          <NavbarText>Notas Fiscais</NavbarText>
        </NavbarLink>
      </Link>
      </NavbarLinkWrapper>
    </NavWrapper>
  )
}

export default Navbar
