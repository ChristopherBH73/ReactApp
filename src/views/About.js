
import foto from '../imagenes/imagenes.js';

function About() {
    return (
            <div>
                <p> Mi nombre es: Christopher Barboza Herrera </p>
                <p> Trabajo para 3PillarGlobal Costa Rica </p>
                <p> Digital Engineering Services </p>
                <img src = {foto.imgPerfil} height='200' ></img>           
            </div>
 
    );
}

export default About;