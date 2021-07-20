import {Table, TableData, TableBody, TableTH, TableTR, TableTD, TableWrapperActions, TableButton, TableLink} from './styles'

const TableHead = ({ children }) => {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  )
}

Table.Head = TableHead
Table.Data = TableData
Table.Body = TableBody
Table.TH = TableTH
Table.TR = TableTR
Table.TD = TableTD
Table.WrapperActions = TableWrapperActions
Table.Button = TableButton
Table.Link = TableLink

export default Table
