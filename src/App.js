import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import Products from "./components/Uslugi";
import Client from "./components/Client";
import Lits from "./components/Lits";
import Tender from "./components/Tender";
import Registr from "./components/Registr";
import Novosti from "./components/Novosti";
import Idiqurbon from "./components/Idiqurbon";
import Footer from "./components/Footer";
import Zudamalnews from "./components/Zudamalnews";
import Kurs from "./components/Kurs";
import Indenfikatsiya from "./components/Indenfikatsiya";
import Auto from "./components/Auto";
import Nativ from "./components/Nativ";
import Final from "./components/Final";
import Istoriya from "./components/Istoriya";
import Statclient from "./components/Statclient";
import Depozit from "./components/Depozit";
import InstantSearch from "./components/InstantSearch";
// import Product from "./components/Product";

function App() {
  return (
    <>
      <Navbar />
      <Route>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/client" component={Client} />
        <Route exact path="/lits" component={Lits} />
        <Route exact path="/tender" component={Tender} />
        <Route exact path="/registr" component={Registr} />
        <Route exact path="/novosti" component={Novosti} />
        <Route exact path="/idiqurbon" component={Idiqurbon} />
        <Route exact path="/zudamalNews" component={Zudamalnews} />
        <Route exact path="/footer" component={Footer} />
        <Route exact path="/kurs" component={Kurs} />
        <Route exact path="/fikatsiya" component={Indenfikatsiya} />
        <Route exact path="/auto" component={Auto} />
        <Route exact path="/final" component={Final} />
        <Route exact path="/istoriya" component={Istoriya} />
        <Route exact path="/stat" component={Statclient} />
        <Route exact path="/depozit" component={Depozit} />
        <Route exact path="/search" component={InstantSearch} />
      </Route>
      {/* <Footer/> */}
    </>
  );
}

export default App;
