import Home from "./pages/Home-page";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Setup from "./Module/home/Setup";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Manager from "./Module/home/Manager";
import Addnewdoc from "./Module/home/Addnewdoc";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}