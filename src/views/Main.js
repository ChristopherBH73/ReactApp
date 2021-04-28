import { Switch,Route } from "react-router-dom";
import About from "./About";
import Crear from "./Crear";
import Home from "./Home";
import Rutas from './rutas';

function Main(props) {
    return (
        <div>
            <Switch>
                 <Route exact path = '/:refresca' component = {Home} />
                 <Route path = '/about' component = {About} />
                 <Route path = '/crear' component = {Crear} />
                 <Route path = '/editar/:id/:name/:last/:email/:phone' component = {Crear} />
                 <Route path = '/parametros/:id' component = {Rutas} />
            </Switch>
            
        </div>
        
    )
}

export default Main;