import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useMutation, useQuery } from '../../../lib/graphql'
import Header from '../../../components/Header'
import Navbar from '../../../components/Navbar'
import Table from '../../../components/Table'
import Container from '../../../components/Container'

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
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { data, mutate } = useQuery(GET_ALL_USERS)
  const [deleteData, deleteUser] = useMutation(DELETE_USER)

  const remove = id => async () => {
    await deleteUser({ id })
    mutate()
  }

  const sidebarToggle = () => setSidebarOpen(old => !old)

  return (
    <div className='flex'>
      <Head>
        <link rel='icon' type='image/png' href='/truck.png' />
        <title>Leleluia Transportes | Usuários</title>
      </Head>
      {sidebarOpen && <Navbar sidebarToggle={sidebarToggle} />}

      <main className='flex flex-col w-full'>
        <Header sidebarOpen={sidebarOpen} sidebarToggle={sidebarToggle} />
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
                          <Link href=''>
                            <a>Editar</a>
                          </Link>
                          {'|'}
                          <a href='#' onClick={remove(user.id)}>
                            Remover
                          </a>
                        </div>
                      </Table.TD>
                    </Table.TR>
                  )
                })}
            </Table.Body>
          </Table>
        </Container>
      </main>
    </div>
  )
}

export default Painel
