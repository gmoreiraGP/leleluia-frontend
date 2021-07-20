import React from 'react';

import { Container,TableHead, TableData } from './styles';

const Table = (props) => {
  return <Container>
      <TableHead>
          {props.head?.map((value) => {
              return(
                  <div key={value}>
                    <span key={value.id}>{value}</span>
                  </div>
              )
          })}
      </TableHead>
      <TableData>
        {props.data?.map((item) => {
        return(
            <div key={item.id}>
                <span onClick={props.details}>{item.company}</span>
                <span>{item.invoiceNumber}</span>
                <span>{item.status}</span>
            </div>
        )
        })}
      </TableData>
  </Container>;
}



export default Table;