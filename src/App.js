import React from 'react';

import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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
    this.setState({
      list:[...this.state.list,this.state.task]
      
    });
    console.log(this.state.list);
  }
  edit(e)
  {
      let a=e.currentTarget.id;
      e.preventDefault(); 
      
  }
  delete(e){ 
    let a=e.currentTarget.id;
    e.preventDefault();  

    for(let i=0;i<this.state.list.length;i++)
    {
      if(this.state.list[i]===a)
      {this.state.list.splice(i,1);
        this.render();
      }
    }
  }
  render()
  {
    
    console.log("called")
    return(
      <form>
      <TextField
        id="outlined"
        style={{ margin: 8 }}
        placeholder="Enter task name"
        margin="normal"
        variant="outlined"
        onChange={this.handleChange}
      />
      <Button variant="contained" color="primary" onClick={this.handleClick} l={10}>Add Task
      
      </Button>
        <ol>
          {this.state.list.map(item => (
            <li key={item}>{item}  <Button variant="outlined" color="primary" id={item} onClick={this.delete}>Edit</Button>
            <Button variant="outlined" color="primary" id={item} onClick={this.delete}>Delete</Button>
          
            </li>
          ))}
 
        </ol>
      </form>
    );
  }
}
export default App;
