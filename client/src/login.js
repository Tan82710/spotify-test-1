import React, { Component } from "react";
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import * as $ from "jquery";
import logo from "./logo.svg";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            token: null,
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    {!this.state.token && (
                        <a
                            className="btn btn--loginApp-link"
                            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token`}
                        >
                            Login to Spotify
                        </a>
                    )}
                </header>
            </div>
        )
    }
}

export default Login;