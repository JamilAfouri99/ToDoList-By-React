import React ,{Component} from "react";
import "./Add.css"


class Add extends Component{
    render(){
        const {handleSubmit,newTask,handleChange,handledeleteall}=this.props
        return (
            <div id="innerDiv">
                <form onSubmit={handleSubmit}>
                    <input id="in" value={newTask} type="text" onChange={handleChange}/>
                    <button id="btn"><i className="fa fa-plus"></i></button>
                </form>
                <button id="btnn2" onClick={handledeleteall}>Clear All</button>
            </div>
        )
    }
}

export default Add