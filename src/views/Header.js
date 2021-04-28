import { Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import fotobanner from '../imagenes/imagenes'


function Header(props) {
    return (<div>
        <p>Todos los derechos Reservados: 3PillarGlobal.com</p>
        <img src = {fotobanner.imgBanner}  height='300'  ></img>
        <Card style={{width: '50vw', margin:'auto', backgroundColor: "lightgray"}}>
            <Link to="/"> Home </Link>  
            {"  "}
            <Link to="/about"> About </Link>
            {"  "}
            <Link to="/crear"> Crear </Link>
            {"  "}
        </Card>

    </div>
    )
}

export default Header;