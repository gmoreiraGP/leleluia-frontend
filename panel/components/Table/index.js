const Table = ({ children }) => {
  return <table className='min-w-full'>{children}</table>
}

const TableHead = ({ children }) => {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  )
}

const TableData = ({ children }) => {
  return (
    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
      {children}
    </td>
  )
}

const TableBody = ({ children }) => {
  return <tbody className='bg-white'>{children}</tbody>
}

const TableTH = ({ children }) => {
  return (
    <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
      {children}
    </th>
  )
}

const TableTR = ({ children }) => {
  return <tr>{children}</tr>
}

const TableTD = ({ children }) => {
  return (
    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
      {children}
    </td>
  )
}

Table.Head = TableHead
Table.Data = TableData
Table.Body = TableBody
Table.TH = TableTH
Table.TR = TableTR
Table.TD = TableTD

export default Table
