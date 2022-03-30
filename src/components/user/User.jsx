import React,{Component} from "react";
import "./User.css"
import Header from "../header/header";
class User extends Component {
    state = {
        users : [
             {id:0,nom:"Nirina",age:12,time:Date().toString().split(' ')[4]},
             {id:1,nom:"Todiso",age:21,time:Date().toString().split(' ')[4]}
        ],
        newUser: {id:0,nom:"",age:0,time:""}
    }
    AddUser=(event) => {
        event.preventDefault();
        const Users = this.state.users.slice();
        const time = Date().toString().split(' ')[4];
        if(this.state.newUser.nom!==""){
            this.state.newUser.time = time;
            Users.push(this.state.newUser);
            this.setState({users:Users});   
        }
    }
    handleChange = (event)=>{
        const value = event.currentTarget.value;
        const users = this.state.users.slice();
        this.setState(
            {
                newUser:{id:users.length>0?users[users.length-1].id+1:0,nom:value,age:10}
            }
        );
    }
    handleDelete = (id,event)=>{
        const Users = this.state.users.slice();;
        const index = Users.findIndex(user=>user.id===id);
        Users.splice(index,1);
        const list = event.currentTarget.parentNode;
        list.style.transition="";
        list.classList.add('fadeOut');
        setTimeout(()=>this.setState({users:Users}),500)
    }
    render() {
        return (
            <div>
                <Header/>
                <div className="listContainer">
                    <div className="list">
                        {this.state.users.map(user=>{
                            return (
                                <p className={"list-item animate"+" "+user.id}>
                                {user.id} <span>{user.nom}{"  "+user.time}</span> 
                                <span className={"btn"+user.id +" "+"btn-del"} onClick={(event)=>this.handleDelete(user.id,event)}>Del</span>
                                </p>
                            )
                        }   
                     )}
                    </div>
               </div>
                <form onSubmit={this.AddUser}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" onChange={this.handleChange} value={this.state.newUser.nom}/>  
                        </div>
                        {/* <div>
                            <label for="age">age</label>
                            <input type="text" id="name" onChange={this.handleChange} value={this.state.newUser.age}/>  
                        </div> */}
                        <div>
                            <button type="submit" className="btn-add">ADD</button> 
                        </div>    
                </form>
            </div>
        );
    }
}

export default User;