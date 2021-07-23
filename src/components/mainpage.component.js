import React from 'react';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios'

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        users:[]
        };
    }
    componentDidMount(){
        axios.get('http://localhost:5000/users/message')
        .then(response =>{
            if(response.data.length > 0){
                this.setState({
                    users:response.data.map(user => user.username),
                })
            }
            console.log(this.users)
        })
    }


    render() {
        return (
          <div>
            <div class="sidenav">
            </div>
            <div class="main">
                <a>Updates</a>
                <span class="dis_felx">
                <a>Session: 30 Mins</a>
                <a>User: AGS</a>
                </span>
                <div class="converstion">
                Converstions
                <input type="text"/>
                <button>Filter</button>
                </div>
            <div class="data_table">
                <table>
                <tr>
                <td>
                <div class="customer_container">
                    <img class="dp" src="https://i.pinimg.com/236x/2c/5d/e1/2c5de13246d5221d8ccdf589b65280bf.jpg"/>
                    <span class="cust_name">Name</span>
                    <br/>
                    <span class="cust_message">Message Sent</span>
                </div>
                </td>
                </tr>
                <tr>
                <td>
                <div class="customer_container">
                    <img class="dp" src="https://i.pinimg.com/236x/2c/5d/e1/2c5de13246d5221d8ccdf589b65280bf.jpg"/>
                    <span class="cust_name">Name</span>
                    <br/>
                    <span class="cust_message">Message Sent</span>
                </div>
                </td>
                </tr>
                <tr>
                <td>
                <div class="customer_container">
                    <img class="dp" src="https://i.pinimg.com/236x/2c/5d/e1/2c5de13246d5221d8ccdf589b65280bf.jpg"/>
                    <span class="cust_name">Name</span>
                    <br/>
                    <span class="cust_message">Message Sent</span>
                </div>
                </td>
                </tr>
                <tr>
                <td>
                <div class="customer_container">
                    <img class="dp" src="https://i.pinimg.com/236x/2c/5d/e1/2c5de13246d5221d8ccdf589b65280bf.jpg"/>
                    <span class="cust_name">Name</span>
                    <br/>
                    <span class="cust_message">Message Sent</span>
                </div>
                </td>
                </tr>
                <tr>
                <td>
                <div class="customer_container">
                    <img class="dp" src="https://i.pinimg.com/236x/2c/5d/e1/2c5de13246d5221d8ccdf589b65280bf.jpg"/>
                    <span class="cust_name">Name</span>
                    <br/>
                    <span class="cust_message">Message Sent</span>
                </div>
                </td>
                </tr>
                </table>
                <div class="chat_box">
                <img class="dp" src="https://i.pinimg.com/236x/2c/5d/e1/2c5de13246d5221d8ccdf589b65280bf.jpg"/>
                <span class="cust_name">Name</span>
                <span class="cust_name">Room: 102</span>
                <span class="cust_name">Oct 1 - Oct 2</span>
                <div class="chat">
                    Today<br/>
                    <img class="dp" src="https://i.pinimg.com/236x/2c/5d/e1/2c5de13246d5221d8ccdf589b65280bf.jpg"/>
                    <span>Name</span>
                    <br/>
                    <span>Message Sent</span>
                </div>
                <label><img src=" asdasd"/></label>
                <input type="text"/>
                </div>
                <div class="user_detail">
                <img class="login_image" src="https://i.pinimg.com/236x/2c/5d/e1/2c5de13246d5221d8ccdf589b65280bf.jpg"/>
                <div class="name">Ea Tipene</div>
                <div class="online">Online</div>
                <br/>
                <span><button>Call</button></span>
                <span><button>Email</button></span>
                <table>
                    <tr>
                        <td>
                        Room
                        </td>
                        <td>
                        102 
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Category
                        </td>
                        <td>    
                        Standard 
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Country
                        </td>
                        <td>
                        India
                        </td>
                    </tr>
                </table>
                </div>
                <div>
                </div>
            </div>
            </div>
          </div>
               );
    }
}

export default LoginComponent;