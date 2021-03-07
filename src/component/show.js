import React,{Component,Fragment} from "react";
import "./show.css"

class Show extends Component{
  state={
    done:true
  }
  changy=()=>{
    this.setState({
      done:!this.state.done
    })
  }
  render(){
  return(
    <Fragment>
        <span className={this.state.done?"":"donner"}>{this.props.item.name}</span>
        <button onClick={this.changy} id="btn2"><i className="fa fa-check"></i></button>
        <button id="btnn" onClick={()=>this.props.handledelete(this.props.index)}><i className="fa fa-trash"></i></button>
    </Fragment>
  )
  }
}
  export default Show