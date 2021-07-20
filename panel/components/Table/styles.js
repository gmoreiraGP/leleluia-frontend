import styled from 'styled-components'
import { rgba } from 'polished'

export const Container = styled.div``

export const TableHead = styled.div`
  display: flex;
  flex-direction: row;

  div {
    display: flex;
    flex-direction: row;
    flex: 1 1 320px;
    background-color: ${props => props.theme.colors.gray};

    span:not(:first-child) {
      border-left: 2px solid ${props => rgba(props.theme.colors.black, 0.5)};
    }

    span {
      flex: 1;
      color: ${props => props.theme.colors.black};
      padding: ${props => props.theme.size.sm};
    }
  }
`

export const TableData = styled(TableHead)`
  div {
    background-color: ${props => props.theme.colors.white};
  }
`
