import { useEffect } from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Remote from './components/Remote';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import './App.css'

import {useDispatch, useSelector} from 'react-redux'
import { fetchProductsList } from "./store/userSlice";

function HostApp() {
  const dispatch = useDispatch()
  const {loading, error} = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(fetchProductsList())
  }, [])

  if (loading) return <div className='fixed top-1/2 left-1/2'> <p className=' bg-amber-300 border-2  p-2 text-black text-lg font-bold max-w-fit min-w-0 inset-0 m-auto'> Loading.... </p> </div>
  if (error) return <p> Error: {error} </p>

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route exact path="/product/:id" element={ <Remote/> } />
        <Route exact path="/about" element={ <About/> } />
        <Route exact path="/contact" element={ <Contact/> } />
        <Route path="*" element={ <NotFound/> } />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default HostApp
