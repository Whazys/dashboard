import Home from './pages/home/Home'
import Login from './pages/login/Login'
import List from './pages/login/List'
import Single from './pages/login/Single'
import New from './pages/login/New'

import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users" />
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
