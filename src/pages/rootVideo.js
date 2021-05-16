import React, {useState} from "react";
import {MainContainer} from "../components/index";
import {CircularProgress} from "@material-ui/core";


function RootVideo() {

    const [loading,setLoading] = useState(true);

    return (
        <MainContainer color={'white'} flexDirection={'column'}>
            {loading && <CircularProgress style={{position:'absolute',top:'50vh'}} color="black" />}
            {/*<iframe src="https://drive.google.com/file/d/1xfalUIyHmfRmiPgfOU8m7jg08tqxfGhO/preview" width="640" height="480"/>*/}
            <video poster="../assets/many/MANY_Small.png" onCanPlay={() => setLoading(false)}  style={{height:'75vh',width:'100vh'}} src={require('../assets/video/MANY_HS_1.m4v').default} autoPlay={true} loop={true}/>
        </MainContainer>
    )
}

export default RootVideo;

