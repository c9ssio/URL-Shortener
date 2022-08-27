import { BrowserRouter, Routes, Route } from "react-router-dom"; //Biblioteca de rotas do react.

import Home from "../pages/Home";   //Importando componentes.
import Links from "../pages/Links";

export default function RouteApp () {  //Criando componente e indicando as rotas.
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/links" element= {<Links/>} />
      </Routes>
    </BrowserRouter>
  )
}