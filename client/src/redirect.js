import React, { Component } from "react";
// import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import * as $ from "jquery";
import hash from "./hash";

import { Grid } from "@material-ui/core"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import axios from 'axios'

class Redirect extends Component {
    constructor() {
        super();
        this.state = {
            token: null,
            id: "",
            items: [],
            dataa : [{
                name: "",
                owner: {},
                description : "",
                images : [{}]
            }]
        }
    }

    componentDidMount() {
        // Set token
        let _token = hash.access_token;
        console.log(hash)
        console.log(window.location)

        if (_token) {
            // Set token
            this.setState({
                token: _token
            });
            this.getID(_token);
        }      
    }



    getData = () => {
        console.log(this.items)
    }

    getToken = (token) => {
        $.ajax({
            url: "https://accounts.spotify.com/api/token",
            type: "GET",
            beforeSend: xhr => {
                xhr.setRequestHeader("Authorization", "Bearer " + token);
            },
            success: data => {
                console.log(data)
            },
            error: err => {
                console.log(err)
            }

        });
    }

    getID = (token) => {
        $.ajax({
            url: "https://api.spotify.com/v1/me",
            type: "GET",
            beforeSend: xhr => {
                xhr.setRequestHeader("Authorization", "Bearer " + token);
            },
            success: data => {
                console.log(data)
                this.getToken(token)
                this.getPlaylist(token)
            }
        });

    };

    getPlaylist = (token) => {
        $.ajax({
            url: `https://api.spotify.com/v1/me/playlists`,
            type: "GET",
            beforeSend: xhr => {
                xhr.setRequestHeader("Authorization", "Bearer " + token);
            },
            success: data => {
                console.log(data)

                this.setState({
                    items: data.items
                })

            }
        });
    }


// example post data
    postData = () => {
        const items = this.state.items
        axios({
            method: "POST",
            data: {
               items
                // name: "Anglais",
                // owner: {
                //     display_name: "Tan Nguyen",
                //     external_urls: {spotify: "https://open.spotify.com/user/11149493415"},
                //     href: "https://api.spotify.com/v1/users/11149493415",
                //     id: "11149493415",
                //     type: "user",
                //     uri: "spotify:user:11149493415",
                // },
                // description : "Une description de ma playlist Anglais",
                // images : [{
                //     height: '640',
                //     url: "https://mosaic.scdn.co/640/ab67616d0000b273600adbc750285ea1a8da249fab67616d0000b2736ca5c90113b30c3c43ffb8f4ab67616d0000b2737d9be9e69a5cf98199d17b37ab67616d0000b273fe9008022f3f54d81dcc8030",
                //     width: '640'
                // }]
            },
            withCredentials: false,
            url: "http://localhost:5000/users/data"
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    };

    render() {
        const items = this.state.items
        console.log(items)
        this.getData()
        const item = items.map((res) => {
            const arrayImg = res.images
            //Avoir un seul Url 
            const singleUrl = []
            singleUrl.push(arrayImg[0])
            console.log(singleUrl[0].url)
            const url = singleUrl[0].url

            return (
                <Grid item xs={6}>
                    <Card>
                        <CardHeader
                            title={res.name}
                        />
                        <img src={url}></img>
                       
                        <CardMedia
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Description : {res.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            )
        })
        
        return (
            <div className="App">
                <button onClick={this.postData}>SAVE</button>
                <h1 style={{color: "white"}}>API Spotify</h1>
                <Grid container spacing={6}>
                    {item}
                </Grid>
            </div>
        )
    }
}


export default Redirect;