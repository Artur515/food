import {BrowserRouter, Route, Switch} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Home from "./pages/home/Home";
import Contacts from "./pages/contact/Contacts";
import About from "./pages/about/About";
import NotFound from "./pages/not found/NotFound";
import Category from "./pages/category/Category";
import Recipe from "./components/recipe/Recipe";

const App = () => {

    return (

        <div className="App">
            <BrowserRouter basename="/food">
                <Header/>
                <main className="main_container">
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/about' component={About}/>
                        <Route path='/contacts' component={Contacts}/>
                        <Route path='/category/:name' component={Category}/>
                        <Route path='/meal/:id' component={Recipe}/>
                        <Route component={NotFound}/>
                    </Switch>
                </main>
                <Footer/>
            </BrowserRouter>
        </div>

    );
}

export default App;
