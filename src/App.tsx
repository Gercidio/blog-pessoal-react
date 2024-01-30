import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer.tsx'
import Navbar from './components/navBar/NavBar.tsx'
import Home from './pages/home/Home.tsx'
import Login from './pages/login/Login.tsx'
import { AuthProvider } from './contexts/AuthContexts.tsx'
import Cadastro from './pages/cadastro/Cadastro.tsx'
import ListaTemas from './components/tema/listatemas/ListaTemas.tsx'
import FormTema from './components/tema/formtema/FormTema.tsx'
import DeletarTema from './components/tema/deletartema/DeletarTema.tsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import DeletarPostagem from './components/postagem/deletarpostagem/DeletarPostagem.tsx'
import FormPostagem from './components/postagem/formpostagem/FormPostagem.tsx'
import ListaPostagens from './components/postagem/listapostagens/ListaPostagens.tsx'
import Perfil from './pages/perfil/Perfil.tsx'


function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastrartema" element={<FormTema />} />
              <Route path="/editartema/:id" element={<FormTema />} />
              <Route path="/deletartema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastrarpostagem" element={<FormPostagem />} />
              <Route path="/editarpostagem/:id" element={<FormPostagem />} />
              <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App