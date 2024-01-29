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


function App() {
  return (
    <>
      <AuthProvider>
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
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App