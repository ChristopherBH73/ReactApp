
import {formik,field,Form, Formik, Field } from "formik";
import Button from '@material-ui/core/Button';
import * as MI_API from '../Api';
import { withRouter } from "react-router-dom";
import { Component } from "react";
import { useHistory, Link } from "react-router-dom";
import { Card } from "@material-ui/core";

var edicion = false;

function Crear(props) {  
        var identificacion = props.match.params.id;
        if (identificacion == null) {
            var id = "";
            var name="";
            var last="";
            var email="";
            var phone="";
        } else{
            edicion = true;
            var id   = identificacion;
            var name = props.match.params.name;
            var last = props.match.params.last;
            var email = props.match.params.email;
            var phone = props.match.params.phone;
        }
        console.log(id + " " +name + " " + last + " " + phone + " " + email);
  return (
    
    <Card style={{justifyContent:'center', width: '50vw', margin:'auto'}}>
      <div className="App">
        <h2>Actualizacion de Contactos</h2>
        <Formik enableReinitialize initialValues={{id:id, name: name, last: last,phone: phone, email: email}}
                onSubmit={(values) => {
                    var hilera = values.id + ',' + values.name + ',' + values.last + ',' + values.phone + ',' + values.email 
                    if (edicion) {
                        
                        actualizarRegistro(hilera);  
                         
                    }else{

                        hilera = hilera + ',1,2021-04-08 14:32:30' 
                        incluirRegistro(hilera);      
                    }
                    var refresca = true;
                    props.history.push("/" + refresca);
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
                        <Field name="phone" type="text" placeholder="Escriba Telefono"/>
                    </p>
                    <p>
                        <Field name="email" type="email" placeholder="Escriba su Email"/>
                    </p>
                    
                    <Button color="primary" variant = "contained" type="submit">Guardar</Button>
                    <p> </p>
                </Form>
        </Formik>      
      </div> 
    </Card> 
    
  );
}

function incluirRegistro(values) {
    MI_API.saveTodo(values);
}

function actualizarRegistro(values){
    MI_API.putTodo(values);
}

export default Crear; 

