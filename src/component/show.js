import React,{Component,Fragment} from "react";
import "./show.css"

class Show extends Component{
  render(){
  return(
    <Fragment>
        <span>{this.props.item.name}</span>
        <button id="btnn" onClick={()=>this.props.handledelete(this.props.index)}><i className="fa fa-trash"></i></button>
    </Fragment>
  )
  }
}
  export default Show