import React from 'react';




class App extends React.Component{
    constructor(){
        super();

        this.state ={
            todos: [{title:'Apple',edit:false},{title:'Banana',edit:false}],
            value : ''
        }
    }

    add_todo = () =>{
        // first way using push method
        // let obj = {title: this.state.value}
        // this.state.todos.push(obj);
        // this.setState({
        //     todos: this.state.todos,
        //     value : ''
        // })

        //second method using spread operator
        let obj = {title: this.state.value}
        this.setState({
            todos: [...this.state.todos,obj],
            value : ''
        })

    }

    delete_todo = (index) =>{
        this.state.todos.splice(index,1);
        this.setState({
            todos: this.state.todos
        })
    }
    edit_todo = (index) => {
        this.state.todos[index].edit = true;
        this.setState({
            todos:this.state.todos
        })
        
    }
    update_todo = (index) => {
        this.state.todos[index].edit = false;
        this.setState({
            todos:this.state.todos
        })
        
    }
    handleChange = (e,index) => {
        this.state.todos[index].title = e.target.value;
        this.setState({
            todos: this.state.todos
        })
    }
    delte_all = () => {
        // this.state.todos = '';
        this.setState({
            todos: []
        })
    }
    render(){
        let {todos,value} = this.state;
        return(
            <div>
                <h1>Todo App</h1>
                <input value={value} type='text' onChange={(e) => this.setState({value:e.target.value}) } placeholder='Enter Todo'/>
                <button onClick={this.add_todo}>Add Todo</button>
                <button onClick={this.delte_all}>Delete All</button>
                <ul>
                    {todos.map((item,index) => {
                        return <li key={index}>
                            {
                                item.edit ? <input type='text' value={item.title} onChange={ (e) => this.handleChange(e,index)}/> : item.title

                            }
                            {
                            item.edit ? <button onClick={() => this.update_todo(index)}>Update</button> :
                            <button onClick={() => this.edit_todo(index)}>Edit</button> 
                            }
                                

                            <button onClick={() => this.delete_todo(index)}>Delete</button>

                            </li>
                    })}
                </ul>
            </div>
        )
    }
}


export default App;