import {Wrapper, HeaderMainTitle, HeaderMainButton, HeaderMainLink} from './styles'

const HeaderMain = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

HeaderMain.Button = HeaderMainButton
HeaderMain.Link = HeaderMainLink
HeaderMain.Title = HeaderMainTitle
export default HeaderMain
