import { useState } from 'react'
import Link from 'next/link'

import {
  ExclamationIcon,
  EyeIcon,
  PencilAltIcon,
  TrashIcon
} from '@heroicons/react/outline'
import { useMutation, useQuery } from '../../../lib/graphql'
import Layout from '../../../components/Layout'
import HeaderMain from '../../../components/HeaderMain'
import Table from '../../../components/Table'
import Container from '../../../components/Container'
import Modal from '../../../components/Modal'

const GET_ALL_INVOICES = `
    query{ 
        getAllInvoices{
          id
          company
          cnpj
          stateRegister
          invoiceNumber
          invoiceEmission
          status
        }
      }
    `

const DELETE_USER = `
mutation deleteUser($id: String!) { 
  deleteUser(id: $id)
  }
`

const HEAD = ['Empresa', 'Nota Fiscal', 'Status']

const Painel = () => {
  const { data, mutate } = useQuery(GET_ALL_INVOICES)
  const [deleteData, deleteUser] = useMutation(DELETE_USER)
  const [openModal, setOpenModal] = useState(false)
  // const [openModalDelete, setOpenModalDelete] = useState(false)
  // const [openModalView, setOpenModalView] = useState(false)

  const handleModal = () => setOpenModal(old => !old)
  // const handleDelete = () => setOpenModalDelete(old => !old)
  // const handleView = () => setOpenModalView(old => !old)

  const remove = id => async () => {
    await deleteUser({ id })
    await mutate()
    handleDelete()
  }

  return (
    <Layout title='Notas fiscais'>
      <Container>
        <HeaderMain>
          <HeaderMain.Title>Notas Fiscais</HeaderMain.Title>
          <Link href='/painel/notas/criar'>
            <HeaderMain.Link>Criar nota fiscal</HeaderMain.Link>
          </Link>
        </HeaderMain>
      
        <Table head={HEAD} data={data?.getAllInvoices} details={() => handleModal()}>

        </Table>
        {openModal && (
                        <Modal close={() => handleModal()}>
                          <Modal.Header>
                            <Modal.Icon>
                              <ExclamationIcon
                                className='h-6 w-6 text-red-600'
                                aria-hidden='true'
                              />
                            </Modal.Icon>
                            <Modal.Title>
                              Nota Fiscal
                              {/* {invoice.id} */}
                            </Modal.Title>
                          </Modal.Header>
                           {/* <Modal.Box>
                            <Modal.Button onClick={handleDelete}>
                              Cancelar
                            </Modal.Button>
                            <Modal.Button
                              $confirm={true}
                              onClick={remove(invoice.id)}
                            >
                              Deletar
                            </Modal.Button>
                          </Modal.Box>  */}
                        </Modal>
                      )}
       {/* <Table>
          <Table.Head>
            <Table.TH>Empresa</Table.TH>
            <Table.TH>Nota Fiscal</Table.TH>
            <Table.TH>Status</Table.TH>
          </Table.Head>
          <Table.Body>
            {data &&
              data.getAllInvoices &&
              data.getAllInvoices.map(invoice => {
                return (
                  <Table.TR key={invoice.id}>
                    <Table.TD>
                    {invoice.company} 
                    <Table.Link onClick={() => handleModal()}>
                         <EyeIcon
                           className='h-6 w-6 text-gray-400 group-hover:text-white '
                           aria-hidden='true'
                         />
                       </Table.Link>
                      </Table.TD>
                    <Table.TD>{invoice.invoiceNumber}</Table.TD>
                    <Table.TD>{invoice.status}</Table.TD>
                    {/* <Table.TD>
                      <div className='flex justify-start items-center gap-2'>
                        {/* <Link href={`/painel/notas/${invoice.id}`}> 
                        <Table.Link onClick={() => handleView()}>
                         
                            <EyeIcon
                              className='h-6 w-6 text-gray-400 group-hover:text-white '
                              aria-hidden='true'
                            />
                          </Table.Link>
                        {/* </Link> 
                        {/* <Link href={`/painel/notas/${invoice.id}/edit`}> 
                        <Table.Link>
                            <PencilAltIcon
                              className='h-6 w-6 text-gray-400 group-hover:text-white '
                              aria-hidden='true'
                            />
                          </Table.Link>
                        {/* </Link> 
                        <Table.Button onClick={handleDelete}>
                          <TrashIcon
                            className='h-6 w-6 text-gray-400 group-hover:text-white '
                            aria-hidden='true'
                          />
                        </Table.Button>
                      </div>
                    
                      {openModalDelete && (
                        <Modal>
                          <Modal.Header>
                            <Modal.Icon>
                              <ExclamationIcon
                                className='h-6 w-6 text-red-600'
                                aria-hidden='true'
                              />
                            </Modal.Icon>
                            <Modal.Title>
                              Tem certeza que deseja remover essa nota fiscal?
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Box>
                            <Modal.Button onClick={handleDelete}>
                              Cancelar
                            </Modal.Button>
                            <Modal.Button
                              $confirm={true}
                              onClick={remove(invoice.id)}
                            >
                              Deletar
                            </Modal.Button>
                          </Modal.Box>
                        </Modal>
                      )}
                    </Table.TD>
                     
                  </Table.TR>
                )
              })}
          </Table.Body>
        </Table>
             */}
      </Container>
    </Layout>
  )
}

export default Painel
