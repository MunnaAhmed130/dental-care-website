import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Contact from './Component/Contact/Contact';
import NotFound from './Component/NotFound/NotFound';
import Footer from './Component/Footer/Footer';
import Services from './Component/Services/Services';
import Register from './Component/Register/Register';
import AuthProvider from './Component/Context/AuthProvider';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Detail from './Component/Details/Detail';
import AboutUs from './Component/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <PrivateRoute path="/details/:serviceId">
            <Detail></Detail>
          </PrivateRoute>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/about_us">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
      </AuthProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
