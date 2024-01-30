import { ReactNode, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContexts'
import { ToastAlerta } from '../../utils/ToastAlerta';


function Navbar() {
  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext)

  let component: ReactNode

  function logout() {
    handleLogout()
    ToastAlerta('Usuário deslogado com sucesso', 'sucesso')
    navigate('/login')
  }

  if (usuario.token !== "") {
    component = (
      <div className='w-full bg-indigo-900 text-white
      flex justify-center py-4'>

        <div className="container flex justify-between text-lg">
          <Link to='/home' className="text-2xl font-bold">Blog Pessoal</Link>

          <div className='flex gap-4'>
            Postagens
            <Link to='/temas' className='hover:underline'>Temas</Link>
            <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
            Perfil
            <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
          </div>
        </div>
      </div>
    )

  }

  return (
    <>
      {component}
    </>
  )
}

export default Navbar