import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import MainPages from './pages/MainPages'
import SendPostPage from './pages/SendPostPage'
import AboutPage from './pages/AboutPage'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<MainPages/>}/>
        <Route path='/create' element={<SendPostPage/>}/>
        <Route path='/:id' element={<AboutPage/>}></Route>
        <Route path='*' element={<h2>404</h2>}/>
      </Routes>
    </>
  )
}

export default App
