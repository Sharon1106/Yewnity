import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";

//for future development
export class Google extends Component {
  responseGoogle = (response) => {
  }
  render() {
    return (
      <div>
        <GoogleLogin
          clientId="141942233468-9aertq4rvk22nhalrg7g706ku6tljjfj.apps.googleusercontent.com"
          buttonText="Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    )
  }
}

export default Google;