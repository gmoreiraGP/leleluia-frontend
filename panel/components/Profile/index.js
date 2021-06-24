import tw from 'tailwind-styled-components'

const Wrapper = tw.div`
    flex
    justify-between
    items-center
    flex-row
`
const ProfileThumb = tw.div`
  w-20
  h-20
  rounded-full
  bg-gray-200
  text-white	
`
const ProfileHeader = tw.div`
  flex
  justify-center
  items-center
  gap-3
`

const ProfileText = tw.h4`
${props =>
  props.$title
    ? 'font-bold text-2xl'
    : 'font-thin text-base italic text-gray-500'}

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

Profile.Thumb = ProfileThumb
Profile.Header = ProfileHeader
Profile.Text = ProfileText
Profile.Label = ProfileLabel
export default Profile
