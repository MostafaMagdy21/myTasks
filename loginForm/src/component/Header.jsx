import React,{ Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{

    state={
        Users:{
            email: "",
            password: ""
        },

        errors:{}

    }

    onChangeHandler= (e) =>{
        console.log(e.target.id, e.target.value);
        let {Users} = this.state;
        Users[e.target.id] = e.target.value;
        this.setState({
            Users
        })
    }

    onSubmetHandler = async (e) =>{
        e.preventDefault();

        const errors = {};
        let invalid = false;
        if(!this.state.Users.email){
            errors.email = ['please inter your email'];
            invalid = true;
        };
        if(!this.state.Users.password){
            errors.password = ['please inter your password'];
            invalid = true;
            
        }else if(this.state.Users.password.length < 8){
            errors.password = ['password shold 8 char at lest'];
            invalid = true;
        };

        if(invalid){
            this.setState({
                errors
            })
        }

        // const options = {
        //     method:"POST",
        //     Header:{
        //         "Accept": "application/json",
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(this.state.Users),
        //     redirect: "follow"
        // }
        // const response = await fetch('https://learning-test.ide-academy.org/api/register', options);
        // const data = response.json();

        // if(data.errros){
        //     this.setState({
        //         errors: data.errors
        //     })
        // }

    }


    render(){
        return(
            <section className="header">
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.onSubmetHandler} className="col-8">

                            <div className="form-group-header">
                                <label htmlFor="email">*E-mail</label>
                                <input type="email"
                                 id="email"
                                 className={this.state.errors.email && 'error'}
                                 onChange={this.onChangeHandler}
                                 value={this.state.Users.email}/>
                                 {this.state.errors.email && this.state.errors.email
                                 .map(error =><span className="errors error-email">{error}</span>)}
                                 
                            </div>
                            
                            <div className="form-group-header">
                                <label htmlFor="password">*Password</label>
                                <input type="password"
                                 id="password"
                                 className={this.state.errors.password && 'error'}
                                 onChange={this.onChangeHandler}
                                 value={this.state.Users.password}/>
                                 {this.state.errors.password && this.state.errors.password
                                 .map(error =><span className="errors error-password">{error}</span>)}
                                 
                            </div>

                            <button className="btn btn-light">Login</button>
                        </form>
                        
                        <span className="logo col-4">
                            <Link to="/">Logo</Link>
                        </span>
                    </div>
                </div>
            </section>
        )
    }
    
}

export default Header;