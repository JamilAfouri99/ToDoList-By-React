import React ,{Component} from "react";
import "./Add.css"


class Add extends Component{
    render(){
        const {handleSubmit,newTask,handleChange}=this.props
        return (
            <div id="innerDiv">
                <form onSubmit={handleSubmit}>
                    <input id="in" value={newTask} type="text" onChange={handleChange}/>
                    <button id="btn"><i className="fa fa-plus"></i></button>
                </form>
            </div>
        )
    }
}

export default Add