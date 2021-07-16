import { Wrapper, CardStyled, CardIcon, CardTitle, CardDescription } from './styles'

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
