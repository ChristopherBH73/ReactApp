import {formik,field,Form, Formik, Field } from "formik";
import Button from '@material-ui/core/Button';
import * as MI_API from '../Api';
import { useHistory, useParams } from "react-router-dom";

function Actualizar(id1,name1,last1,phone1,email1) {
     
    id1=null;
    name1="";
    last1="";
    phone1="";
    email1="";
  
    console.log(useParams);
  return (
    <card>
      <div className="App">
        <h2>Mantenimiento de Contactos</h2>
        <Formik initialValues={{id:id1, name: name1, last: last1, email: email1,phone: phone1}}

                onSubmit={(values) => {
                    var hilera = values.id + ',' + values.name + ',' + values.last + ',' + values.email + ',' + values.phone + ',1,2021-04-08 14:32:30' 
                    console.log(hilera);
                    actualizarRegistro(hilera);
                    // una vez que borra los registros los lista de nuevo
                    this.obtenerTodos()
                    }
                    }>  
                <Form>
                    <p>
                        <Field name="id" type="text" placeholder="Escriba Id" required/>
                    </p>
                    <p>
                        <Field name="name" type="text" placeholder="Escriba su Nombre" required/>
                    </p>
                    <p>
                        <Field name="last" type="text" placeholder="Escriba su Apellido"/>
                    </p>
                    <p>
                        <Field name="email" type="email" placeholder="Escriba su Email"/>
                    </p>
                    <p>
                        <Field name="phone" type="text" placeholder="Escriba Telefono"/>
                    </p>
                    <Button  color="Primary" variant = "contained" type="submit">Guardar</Button>
                </Form>
        </Formik>      
      </div> 
    </card> 
    
  );
}



function actualizarRegistro(values) {
    MI_API.putTodo(values)
}

export default Actualizar; 
