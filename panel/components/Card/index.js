import tw from 'tailwind-styled-components'

const Wrapper = tw.div`
    w-full 
    px-6 
    sm:w-1/2 
    xl:w-1/3
`
const CardStyled = tw.div`
    flex 
    items-center 
    px-5 
    py-6 
    shadow-sm 
    rounded-md 
    bg-white
`
const CardIcon = tw.div`
    p-3 
    rounded-full 
    bg-indigo-600 
    bg-opacity-75
`
const CardInfo = tw.div`
    mx-5
`

const CardTitle = tw.h4`
    text-2xl
    font-semibold
    text-gray-700
`
const CardDescription = tw.p`
    text-gray-500
`

const Card = () => {
  return (
    <Wrapper>
      <CardStyled>
        <CardIcon>icon</CardIcon>
        <CardTitle>Title</CardTitle>
        <CardDescription>Description</CardDescription>
      </CardStyled>
    </Wrapper>
  )
}

export default Card
