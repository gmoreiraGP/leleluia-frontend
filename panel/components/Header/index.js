import { useState } from 'react'
import tw from 'tailwind-styled-components'

const Wrapper = tw.header`
    relative
    p-3
    w-full
    bg-secondary-200
`
const NavWrapperIcon = tw.div`
    absolute
    top-0
    left-0
    p-3
    z-10
    cursor-pointer
`

const ProfileAvatar = tw.button`
    block
    h-8
    w-8
    justify-self-end
    rounded-full
    overflow-hidden
    shadow
    focus:outline-none
    float-right
`

const ProfileImage = tw.img`
    h-full
    w-full
    object-cover
`

const ProfileOptions = tw.div`
    absolute
    right-0
    top-10
    right-5
    mt-2
    w-48
    bg-white-400
    rounded-md
    overflow-hidden
    shadow-xl
    z-10
`

const ProfileItem = tw.a`
    block
    px-4
    py-2
    text-sm
    bg-white
    text-primary-900
    hover:bg-primary-800
    hover:text-white
`

const Header = ({ sidebarOpen, sidebarToggle }) => {
  const [dropDownOpen, setDropdownOpen] = useState(false)
  const dropDownToggle = () => setDropdownOpen(old => !old)

  return (
    <Wrapper>
      {!sidebarOpen && (
        <NavWrapperIcon onClick={sidebarToggle}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 fill-primary-500 hover:fill-primary-900'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            />
          </svg>
        </NavWrapperIcon>
      )}

      <ProfileAvatar onClick={dropDownToggle}>
        <ProfileImage
          src='https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80'
          alt='Your avatar'
        />
        {dropDownOpen && (
          <ProfileOptions>
            <ProfileItem href='#' className=''>
              Perfil
            </ProfileItem>
            <ProfileItem href='/login'>Sair</ProfileItem>
          </ProfileOptions>
        )}
      </ProfileAvatar>
    </Wrapper>
  )
}

export default Header