import React from 'react';

import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
class App extends React.Component
{
  constructor()
  {
    super();
    this.state = {list: [], task: ''};
    this.handleChange=this.handleChange.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.edit=this.edit.bind(this);
    this.delete=this.delete.bind(this);
  }
  handleChange(event)
  {
    this.setState({
    task:event.target.value
    }
    );
  }
  handleClick(event)
  {
    if(this.setState.task!=""){
      this.setState({
      list:[...this.state.list,this.state.task]
      
    });}
    console.log(this.state.list);
    console.log("hi");
  }
  edit(e)
  {
      let a=e.currentTarget.id;
      let array=[...this.state.list];
      e.preventDefault(); 
      let newtask=prompt("Enter the new task");
      array[array.indexOf(a)]=newtask;
    
      console.log(newtask);
      this.setState(
        {
          list:array
        }
      )
  }
  delete(e){ 
    let array=[...this.state.list]
    let a=e.currentTarget.id;
    e.preventDefault();  
    for(let i=0;i<array.length;i++)
    {
      if(array[i]===a)
      {
        array.splice(i,1);
      }
    }
    this.setState(
      {
        list:array
      }
    )
  }
  render()
  {
    
   // console.log("called")
    return(
      
      <form>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            TODO List
          </Typography>
        </Toolbar>
      </AppBar>
      <TextField
        id="outlined"
        style={{ margin: 8 }}
        placeholder="Enter task name"
        
        variant="outlined"
        onChange={this.handleChange}
        
      />
      <Button variant="contained" style={{ margin: 20 }} color="secondary" onClick={this.handleClick} l={10}>Add Task
      
      </Button>
      <List style={{margin: 20}}>
          {this.state.list.map(item => (
            <li key={item}>{item}  <Button style={{ margin: 20 }} variant="outlined" color="primary" id={item} onClick={this.edit}>Edit</Button>
            <Button variant="outlined" style={{ margin: 1 }} color="primary" id={item} onClick={this.delete}
    >Delete</Button> 
            </li>  
          ))
          }
        </List> 
      </form>
    );
   }
}
export default App;
