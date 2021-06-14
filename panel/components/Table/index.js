import tw from 'tailwind-styled-components'

const Table = tw.table`
  min-w-full
`

const TableHead = ({ children }) => {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  )
}

const TableData = tw.td`
  px-6
  py-4
  whitespace-no-wrap
  border-b
  border-gray-200
`

const TableBody = tw.tbody`
  bg-white
`

const TableTH = tw.th`
  px-6
  py-3
  border-b
  border-gray-200
  bg-gray-50
  text-left
  text-xs
  leading-4
  font-medium
  text-gray-500
  uppercase
  tracking-wider
`

const TableTR = tw.tr``

const TableTD = tw.td`
  px-6
  py-4
  whitespace-no-wrap
  border-b
  border-gray-200
`

const TableButton = tw.button`
group
p-3
rounded-lg
cursor-pointer
bg-gray-100
text-gray-500

hover:bg-gray-700
hover:text-white
`
const TableLink = tw.a`
group
p-3
rounded-lg
cursor-pointer
bg-gray-100
text-gray-500

hover:bg-gray-700
hover:text-white
`

Table.Head = TableHead
Table.Data = TableData
Table.Body = TableBody
Table.TH = TableTH
Table.TR = TableTR
Table.TD = TableTD
Table.Button = TableButton
Table.Link = TableLink

export default Table
