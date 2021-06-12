import { useRef, useState } from 'react'
import Link from 'next/link'

import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import { useMutation, useQuery } from '../../../lib/graphql'
import Layout from '../../../components/Layout'
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
  const cancelButtonRef = useRef(null)

  const dialogDelete = () => setOpenModal(old => !old)

  const remove = id => async () => {
    await deleteUser({ id })
    await mutate()
    dialogDelete()
  }

  return (
    <Layout title='Usuários'>
      <Container>
        <h1 className='text-5xl font-bold mb-4'>Usuários</h1>
        <Link href='/painel/usuarios/criar'>
          <a>Criar usuário</a>
        </Link>
        <Table>
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
                        <Link href={`/painel/usuarios/${user.id}/edit`}>
                          <a>Editar</a>
                        </Link>
                        {'|'}
                        <a href='#' onClick={dialogDelete}>
                          Remover
                        </a>
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
      </Container>
    </Layout>
  )
}

export default Painel
