import React from 'react';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios'

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangename = this.onChangename.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
       email :'',
       name:''
    };
    }

    onChangeemail(e){
        this.setState({
            email:e.target.value
        })
        
    }
    onChangename(e){
        
        this.setState({
            name:e.target.value
        })
    }

  responseFacebook(response) {
        axios.get('http://localhost:5000/users/')
        .then(res=>{
            console.log(res)
            if(res.data.length > 0){

                if(res.data[2].email==response.email){
                    window.location.href="/mainpage"
                }
                else{
                    document.getElementById('image').innerHTML="Sign Up with Facebook Email To Login"
                }
            }
        })

  }

  onSubmit(e){
    e.preventDefault();
    const data = {
        email: this.state.email,
        name: this.state.name
        }
    axios.post('http://localhost:5000/users/add',data)
    .then(res => console.log(res.data))
    .catch(err=> console.log(err));
    console.log(data);
    }   

    render() {
        return (
            <div class="login_page_div">
            <img src="https://maddenslawyers.com.au/wp-content/uploads/Cyber-security.png" class="login_image"/><br/>
            <div class="fb_login_button">
                <h1>Facebook Helpdesk</h1>
            </div>
            <form onSubmit={this.onSubmit}>
                <div class="container">
                    <input type="email"  value={this.state.email} onChange={this.onChangeemail} placeholder="Email Address" name="email" required/>
                    <br/>
                    <input type="text" value={this.state.name} onChange={this.onChangename} placeholder="Full Name" name="Name" required/>
                </div>
                    <input type="submit" value="SIGN UP"/>
                    
                </form>
            <div class="fb_login_button">
                
                <FacebookLogin
                appId="351358239925927"
                autoLoad={false}
                fields="name,email,picture"
                callback={this.responseFacebook}
                />
          </div>
          <div id="image">
          </div>
          </div>
               );
    }
}

export default LoginComponent;