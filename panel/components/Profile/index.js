import tw from 'tailwind-styled-components'

const Wrapper = tw.div`
    flex
    justify-between
    items-center
`

const ProfileHeader = tw.div`
  flex
  justify-center
  items-center
  gap-3
`

const ProfileText = tw.h4`

`

const ProfileLabel = tw.div`
  p-3
  bg-red-300
  text-white
  rounded-lg
`

const Profile = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

Profile.Header = ProfileHeader
Profile.Text = ProfileText
Profile.Label = ProfileLabel
export default Profile
