import React,{Component} from "react";
import "./Contact.css"
import Header from "../header/header";
class Contact extends Component {
    state = {
        users : [
             {id:0,nom:"Nirina",age:12},
             {id:1,nom:"Todiso",age:21}
        ],
        newUser: {id:0,nom:"",age:0}
    }
    AddUser=(event) => {
        event.preventDefault();
        const Users = this.state.users.slice();
        if(this.state.newUser.nom!=""){

            Users.push(this.state.newUser);
            this.setState({users:Users});   
        }
    }
    handleChange = (event)=>{
        const value = event.currentTarget.value;
        const users = this.state.users;
        this.setState({newUser:{id:users[users.length-1].id+1,nom:value,age:10}});
    }
    handleDelete = (id)=>{
        const Users = this.state.users.slice();;
        const index = Users.findIndex(user=>user.id==id);
        Users.splice(index,1);
        setTimeout(()=>this.setState({users:Users}),1000)
    }
    render() {
        return (
            <div>
                <Header/>
                <div>
                    <div className="list">
                        {this.state.users.map(user=>{
                            return (
                                <p className="list-item animate">
                                {user.id} <span>{user.nom}</span> 
                                <span className="btn" onClick={()=>this.handleDelete(user.id)}>del</span>
                                </p>
                            )
                        }   
                     )}
                    </div>
               </div>
                <form onSubmit={this.AddUser}>
                        <div>
                            <label htmlFor="name">name</label>
                            <input type="text" id="name" onChange={this.handleChange} value={this.state.newUser.nom}/>  
                        </div>
                        {/* <div>
                            <label for="age">age</label>
                            <input type="text" id="name" onChange={this.handleChange} value={this.state.newUser.age}/>  
                        </div> */}
                        <div>
                            <button type="submit" className="btn-add">Add</button> 
                        </div>    
                </form>
            </div>
        );
    }
}

export default Contact;