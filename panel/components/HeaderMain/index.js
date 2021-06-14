import tw from 'tailwind-styled-components'

const Wrapper = tw.div`
    flex
    justify-between
    items-center
`

const HeaderMainButton = tw.button`

`
const HeaderMainLink = tw.a`
    bg-gray-200
    p-3
    text-gray-600
    rounded-lg

    cursor-pointer
    hover:bg-gray-800
    hover:text-white
`

const HeaderMain = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

HeaderMain.Button = HeaderMainButton
HeaderMain.Link = HeaderMainLink
export default HeaderMain
