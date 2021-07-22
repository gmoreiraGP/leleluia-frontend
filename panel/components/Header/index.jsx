import { useState } from 'react'
import { MenuAlt2Icon } from '@heroicons/react/solid'
import {
  Wrapper,
  NavWrapperIcon,
  ProfileAvatar,
  ProfileImage,
  ProfileOptions,
  ProfileItem
} from './styles'

const Header = ({ sidebarOpen, sidebarToggle }) => {
  const [dropDownOpen, setDropdownOpen] = useState(false)
  const dropDownToggle = () => setDropdownOpen(old => !old)

  return (
    <Wrapper>
      {/* {!sidebarOpen && (
        <NavWrapperIcon onClick={sidebarToggle}>
          <MenuAlt2Icon />
        </NavWrapperIcon>
      )} */}

      {/* <ProfileAvatar onClick={dropDownToggle}>
        <ProfileImage
          src='https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80'
          alt='Your avatar'
        />
        {dropDownOpen && (
          <ProfileOptions>
            <ProfileItem href='#'>
              Perfil
            </ProfileItem>
            <ProfileItem href='/login'>Sair</ProfileItem>
          </ProfileOptions>
        )}
      </ProfileAvatar> */}
    </Wrapper>
  )
}

export default Header
