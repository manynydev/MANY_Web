import React, {useState} from "react";
import {MainContainer} from "../components/index";
import {CircularProgress} from "@material-ui/core";
import leftBlackArrow from "../assets/icons/left_black.png";
import NavigationButton from "../components/navigationButton";


function RootVideo() {

    const [loading, setLoading] = useState(true);

    const leftArrowImage = <img style={{height: 35, position: 'absolute'}} alt='leftBlackArrow' src={leftBlackArrow}/>
    const largeNavButton = <NavigationButton hoverBorder={false} width={'50px'} height={'40px'}
                                             displayComponent={leftArrowImage} path={'/rootHome'}/>

    return (
        <MainContainer color={'white'} flexDirection={'column'}>
            <div style={{position:'absolute',left:100}}>
                {largeNavButton}
            </div>
            {loading && <CircularProgress style={{position: 'absolute', top: '50vh'}} color="black"/>}
            <video poster="../assets/many/MANY_Small.png" onCanPlay={() => setLoading(false)}
                   style={{height: '75vh', width: '100vh'}} src={require('../assets/video/MANY_HS_1.m4v').default}
                   autoPlay={true} loop={true}/>
        </MainContainer>
    )
}

export default RootVideo;

