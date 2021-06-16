import Link from 'next/link'
import Image from 'next/image'
import tw from 'tailwind-styled-components'

const NavWrapper = tw.nav`
    flex
    flex-col
    bg-gray-900
    px-10
    w-1/6
    max-w-xs
    h-screen
    relative
`
const NavbarLogo = tw.div`
    flex
    items-center
    justify-center
    mt-5
`

const NavbarCloseIcon = tw.div`
  absolute
  top-0
  right-0
  p-3
  cursor-pointer
`

const NavbarLink = tw.a`
    flex
    items-center
    mt-4
    py-2
    px-6
    text-white
    hover:bg-gray-700
    hover:bg-opacity-25
    hover:text-gray-500
    w-full
    cursor-pointer
`

const NavbarText = tw.span`
    mx-3
`

const Navbar = ({ sidebarToggle }) => {
  return (
    <NavWrapper>
      <NavbarLogo>
        <div className='flex items-center'>
          <Image src='/truck.svg' alt='Leleluia' width='50' height='50' />
          <span className='text-white text-2xl mx-2 font-semibold'>Painel</span>
        </div>
      </NavbarLogo>
      <NavbarCloseIcon onClick={sidebarToggle}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 fill-red-500 hover:fill-white'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z'
            clipRule='evenodd'
          />
        </svg>
      </NavbarCloseIcon>
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
    </NavWrapper>
  )
}

export default Navbar
