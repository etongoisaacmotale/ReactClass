import React, { Component } from 'react'

class User extends Component {
    constructor(){
        super()

        this.state = {
            isLogin: true,
            username: "Etongo Isaac"
        }
    }


  render() {
    if(this.state.isLogin){
        return <div>
            <h2>Welcome {this.state.username}</h2>
        </div>
    }else{
        return <div>
            <h2>Welcome you are not a registered user yet</h2>
        </div>
    }
    return (
      <div>User</div>
    )
  }
}

export default User
