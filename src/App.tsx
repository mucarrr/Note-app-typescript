import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Detail from './pages/detail/Detail'
import Edit from './pages/edit/Edit'
import Layout from './components/layout/Layout'

const App:FC = () => {
  return (
    <BrowserRouter
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route element={<Layout />}>
        <Route path="/note/:id" element={<Detail />} />
        <Route path="/note/:id/edit" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App