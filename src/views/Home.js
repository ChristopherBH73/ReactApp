
import * as MI_API from '../Api';
import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { List, ListItem } from '@material-ui/core';

import createHistory from 'history/createBrowserHistory'



const useStyles = makeStyles({
    root: {minWidth: 275,},
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {fontSize: 14, },
    pos: { marginBottom: 12,},
  });


  const history = createHistory();

export default class App extends React.Component{

    

EditarRegistro(id,name,last,email,phone) {
    this.props.history.push(`/editar/${id}/${name}/${last}/${email}/${phone}`);
    
};

state = {
    personas:[]
};

componentDidMount() {
    this.obtenerTodos();
    
    var refresca  = this.props.match.params.refresca;
    if (refresca==true) {
        history.go(0);
    };
}

obtenerTodos() {
    MI_API.getTodos().then((res) => {
        const personas2 = res.data;
        this.setState({ 
            personas: personas2  
        });
    });
}

BorrarRegistro(id) {
    MI_API.deleteTodos(id).then((res) => {
        // una vez que borra los registros los lista de nuevo
        this.obtenerTodos()
    });
}


crear(todo) {
    MI_API.saveTodo(todo).then((res) => {
      console.log(`Creado: ${todo.id}`);
      const newTodoList = this.state.personas;
      newTodoList.push(todo);
      this.setState({
        personas: newTodoList
      });
    });
  }
  
  
  render() {
    
    
    return (
        
        <Card style={{justifyContent:'center', width: '50vw', margin:'auto'}}>
            <br></br> 
            <h2>LISTA DE CONTACTOS</h2>
  
            {this.state.personas.map((x) => (
            <List  >  
                <ListItem key={x.id} style={{justifyContent:'center'}}> 
                        <Card  style={{backgroundColor: "lightgray", width: '30vw'}}>
                            <CardContent>
                                        Id: {x.id} <br></br> Nombre: {x.name} <br></br> Apellido: {x.last} <br></br> Email: {x.email} <br></br> Telefono: {x.phone}
                            </CardContent>
                            <CardActions>
                                    <Button size="small" onClick={() => this.BorrarRegistro(x.id)} variant="contained" color="secondary">Eliminar </Button>
                                    <Button size="small" onClick={() => this.EditarRegistro(x.id,x.name,x.last,x.email,x.phone)} variant="contained" color="primary">Editar </Button>
                            </CardActions>
                        </Card>
                    
                </ListItem>
            </List>
            ))} {" "}
        </Card>
    );
  }

} 



  