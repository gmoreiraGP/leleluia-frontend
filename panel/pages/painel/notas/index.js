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

const GET_ALL_USERS = `
    query{ 
        getAllUsers{
          id
          email
        }
      }
    `

const DELETE_USER = `
mutation deleteUser($id: String!) { 
  deleteUser(id: $id)
  }
`

const Painel = () => {
  const { data, mutate } = useQuery(GET_ALL_USERS)
  const [deleteData, deleteUser] = useMutation(DELETE_USER)
  const [openModal, setOpenModal] = useState(false)

  const dialogDelete = () => setOpenModal(old => !old)

  const remove = id => async () => {
    await deleteUser({ id })
    await mutate()
    dialogDelete()
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
        {/* <Table>
          <Table.Head>
            <Table.TH>Email</Table.TH>
            <Table.TH>Função</Table.TH>
            <Table.TH>Ação</Table.TH>
          </Table.Head>
          <Table.Body>
            {data &&
              data.getAllUsers &&
              data.getAllUsers.map(user => {
                return (
                  <Table.TR key={user.id}>
                    <Table.TD>{user.email}</Table.TD>
                    <Table.TD></Table.TD>
                    <Table.TD>
                      <div className='flex justify-start items-center gap-2'>
                        <Link href={`/painel/usuarios/${user.id}`}>
                          <Table.Link>
                            <EyeIcon
                              className='h-6 w-6 text-gray-400 group-hover:text-white '
                              aria-hidden='true'
                            />
                          </Table.Link>
                        </Link>
                        <Link href={`/painel/usuarios/${user.id}/edit`}>
                          <Table.Link>
                            <PencilAltIcon
                              className='h-6 w-6 text-gray-400 group-hover:text-white '
                              aria-hidden='true'
                            />
                          </Table.Link>
                        </Link>
                        <Table.Button onClick={dialogDelete}>
                          <TrashIcon
                            className='h-6 w-6 text-gray-400 group-hover:text-white '
                            aria-hidden='true'
                          />
                        </Table.Button>
                      </div>
                      {openModal && (
                        <Modal>
                          <Modal.Header>
                            <Modal.Icon>
                              <ExclamationIcon
                                className='h-6 w-6 text-red-600'
                                aria-hidden='true'
                              />
                            </Modal.Icon>
                            <Modal.Title>
                              Tem certeza que deseja remover esse usuário?
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Box>
                            <Modal.Button onClick={dialogDelete}>
                              Cancelar
                            </Modal.Button>
                            <Modal.Button
                              $confirm={true}
                              onClick={remove(user.id)}
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
