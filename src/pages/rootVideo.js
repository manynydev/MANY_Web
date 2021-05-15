import React, {useState} from "react";
import {MainContainer} from "../components/index";
import {CircularProgress} from "@material-ui/core";


function RootVideo() {

    const [loading,setLoading] = useState(true);

    return (
        <MainContainer color={'white'} flexDirection={'column'}>
            {loading && <CircularProgress style={{position:'absolute',top:'50vh'}} color="black" />}
            <video poster="../assets/many/MANY_Small.png" onCanPlay={() => setLoading(false)}  style={{height:'75vh',width:'100vh'}} src={require('../assets/video/KellerEasterling.MANY.mp4').default} autoPlay={true} loop={true}/>
        </MainContainer>
    )
}

export default RootVideo;

