import React, {Component} from 'react';

class AddToDo extends Component{
    state = {
        content: ""
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })  
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.content!==""){
        this.props.addToDo(this.state);
        this.setState({
            content: ""
        })
    }
    }
    render(){
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label className="cyan-text">Add New Todo:</label>
                <input className="cyan-text" type="text" onChange={this.handleChange} value={this.state.content}></input>
                <div className="center-align">
                    <button class="waves-effect waves-light btn-large cyan" onClick={this.handleSubmit}><i class="material-icons">add</i></button>
                </div>
            </form>
            </div>
        )
    }
}

export default AddToDo;