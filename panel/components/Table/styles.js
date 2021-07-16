import styled from 'styled-components'
import { rgba } from 'polished'

export const Table = styled.table`
  min-width: 100%;
  color: ${props => rgba(props.theme.colors.black, 0.5)};
`

export const TableData = styled.td`
  padding: ${props => props.theme.size.md};
  border: 2px solid ${props => props.theme.colors.gray};
`

export const TableBody = styled.tbody`
  background-color: ${props => props.theme.colors.white};
`

export const TableTH = styled.th`
  padding: ${props => props.theme.size.sm};
  border: 2px solid ${props => props.theme.colors.gray};
  background-color: ${props => props.theme.colors.gray};
  text-align: left;
`

export const TableTR = styled.tr``

export const TableTD = styled.td`
  padding: ${props => props.theme.size.sm} ${props => props.theme.size.xsm};
  border: 2px solid ${props => props.theme.colors.gray};
`
export const TableWrapperActions = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: ${props => props.theme.size.md};
`

export const TableButton = styled.button`
  padding: ${props => props.theme.size.xsm};
  border-radius: ${props => props.theme.size.md};
  background-color: ${props => props.theme.colors.red};
  color: ${props => props.theme.colors.white};
  cursor: pointer;

  svg {
    width: 24px;
  }

  &:hover {
    background-color: ${props => rgba(props.theme.colors.black, 0.6)};
    color: ${props => props.theme.colors.white};
  }
`
export const TableLink = styled.a`
  padding: ${props => props.theme.size.xsm};
  border-radius: ${props => props.theme.size.md};
  background-color: ${props => props.theme.colors.gray};
  cursor: pointer;

  svg {
    width: 24px;
  }

  &:hover {
    background-color: ${props => rgba(props.theme.colors.black, 0.6)};

    svg {
      color: ${props => props.theme.colors.white};
    }
  }
`
