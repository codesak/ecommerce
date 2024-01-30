import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Homepage from './pages/Homepage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Homepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
