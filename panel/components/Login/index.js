import Image from 'next/image'
import tw from 'tailwind-styled-components'

const Wrapper = tw.div`
    min-h-screen
    min-w-screen
    w-screen
    flex
    justify-center
    items-center
    p-10
    bg-secondary-100
`

const Container = tw.div`
  max-w-md
  w-full
  space-y-8
  center
`

const Header = tw.div``

const Form = tw.form`
  mt-8
  space-y-6
  bg-white
  p-10
  rounded-md
`
const WrapperInput = tw.div`
  rounded-md
  shadow-sm
  -space-y-px
`

const Input = tw.input`
  appearance-none
  rounded-none
  relative
  block
  w-full
  px-3
  py-2
  border
  border-gray-300
  placeholder-gray-500
  text-gray-900
  focus:outline-none
  focus:ring-indigo-500
  focus:border-indigo-500
  focus:z-10
  sm:text-sm
`

const Checkbox = tw.input`
  h-4
  w-4
  text-indigo-600
  focus:ring-indigo-500
  border-gray-300
  rounded
`

const Login = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <img
            src='/truck.svg'
            alt='Leleluia Transportes'
            className='mx-auto h-20 w-auto'
          />
          <h2 className='mt-6 text-center text-3xl font-extrabold'>
            Entre na sua conta
          </h2>
        </Header>
        <Form action='#' method='POST'>
          {/* <Input type='hidden' name='remember' value='true' /> */}
          <WrapperInput>
            <div>
              <label htmlFor='email' className='sr-only'>
                Email
              </label>
              <Input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                placeholder='Email'
                className='rounded-t-md'
              />
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Senha
              </label>
              <Input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                placeholder='Senha'
                className='rounded-b-md'
              />
            </div>
          </WrapperInput>

          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <Checkbox id='remember_me' name='remember_me' type='checkbox' />
              <label
                htmlFor='remember_me'
                className='ml-2 block text-sm text-gray-900'
              >
                Lembrar-me
              </label>
            </div>

            <div className='text-sm'>
              <a
                href='#'
                className='font-medium text-indigo-600 hover:text-indigo-500'
              >
                Esqueceu sua senha?
              </a>
            </div>
          </div>

          <div className='group'>
            <button
              type='submit'
              className='relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 group-hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
            >
              <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                <svg
                  className='fill-current h-5 w-5 text-red-900 group-hover:text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>
              ENTRAR
            </button>
          </div>
        </Form>
      </Container>
    </Wrapper>
  )
}
export default Login
