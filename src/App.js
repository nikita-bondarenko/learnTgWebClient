
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main.jsx";
import City from "./pages/City.jsx";
import Wallet from "./pages/Wallet.jsx";
import Currency from "./pages/Currency.jsx";
import Cripto from "./pages/Cripto.jsx";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Main></Main>} /> 
      <Route path="/city" element={<City></City>} /> 
      <Route path="/wallet" element={<Wallet></Wallet>} /> 
      <Route path="/crypto" element={<Cripto></Cripto>} /> 
      <Route path="/currency" element={<Currency></Currency>} /> 
    </Routes>
  );
}

export default App;
