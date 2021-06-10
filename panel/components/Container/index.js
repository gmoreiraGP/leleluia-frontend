import tw from 'tailwind-styled-components'
const Wrapper = tw.div`
    container
    mx-auto
    p-8
`
const Container = ({ children }) => <Wrapper>{children}</Wrapper>

export default Container
