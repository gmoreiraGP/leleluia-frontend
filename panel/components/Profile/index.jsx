import {Wrapper, ProfileThumbImage, ProfileHeader, ProfileWrapperText, ProfileText, ProfileLabel} from './styles'

const Profile = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

const ProfileThumb = ({ initials, initialsLetters }) => {
  return (
    <ProfileThumbImage
      initials={initials}
      initialsLetters={initialsLetters}
    />
  )
}

Profile.Thumb = ProfileThumb
Profile.Header = ProfileHeader
Profile.WrapperText = ProfileWrapperText
Profile.Text = ProfileText
Profile.Label = ProfileLabel
export default Profile
