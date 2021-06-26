import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import 'sanitize.css'
import 'sanitize.css/forms.css'
import 'sanitize.css/typography.css'

export default createGlobalStyle`
  ${normalize()}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
    font: 400 16px Roboto, sans-serif;
    overflow-x: hidden;
  }
  ul {
    list-style: none;
  }
  input{
    
    &:focus{
      outline: 0;
    }
  }
  a{
    text-decoration: none;
    color: ${props => props.theme.colors.white};
  }
`
