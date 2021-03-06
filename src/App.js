import React,{Component} from "react";
import "./App.css";
import Add from "./component/Add";
import Show from "./component/show";


class App extends Component {
  state={
    newTask:"",
    items: []
  }

  handleChange=(e)=>{
    this.setState({
      ...this.state.items,
      newTask:e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    if(this.state.newTask.length>0){
      this.setState({
        ...this.state.items.push({
          name:this.state.newTask,
        }),
        newTask:""
      })}
  }

  handledelete=(index)=>{ 
    this.setState({
      ...this.state.items.splice(index,1)
    });
  }

  render(){
    return(
      <div className="App">
        <p id="todo">TO DO LIST</p>
            <Add handleChange={this.handleChange} handleSubmit={this.handleSubmit} newTask={this.state.newTask}/>
        <div id="screen"> 
            <ul>
              {this.state.items.map((item,index)=>
              <li>
                <Show handledelete={this.handledelete} index={index} key={index} item={item}/>
              </li>
              )}
            </ul>
        </div>
      </div>
    )
  }
}

export default App