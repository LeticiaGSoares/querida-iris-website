import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Author from './components/Author'
import Gallery from './components/Gallery'
import MakingOf from './components/MakingOf'
import Login from './components/Login'
import SignUp from './components/SingUp'
import NotFound from './components/NotFound'

function App() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="" element={
                    <>
                        <Header />
                        <Home />
                        <Footer/>
                    </>
                } />
                <Route path="/login" element={
                    <>
                        <Header />
                        <Login />
                        <Footer/>
                    </>
                } />
                <Route path="/cadastro" element={
                    <>
                        <Header />
                        <SignUp />
                        <Footer/>
                    </>
                } />
                <Route path="/bastidores" element={
                    <>
                        <Header />
                        <MakingOf />
                        <Footer/>
                    </>
                } />
                <Route path="/galeria" element={
                    <>
                        <Header />
                        <Gallery />
                        <Footer/>
                    </>
                } />
                <Route path="/autora" element={
                    <>
                        <Header />
                        <Author />
                        <Footer/>
                    </>
                } />
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    ) 
}

export default App
