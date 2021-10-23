import React, {useState} from "react";
import {MainContainer, TextBaseManySans} from "../components/index";
import {CircularProgress} from "@material-ui/core";
import leftBlackArrow from "../assets/icons/left_black.png";
import NavigationButton from "../components/navigationButton";


function RootVideo() {

    const [loading, setLoading] = useState(true);

    const leftArrowImage = <img style={{height: 35, position: 'absolute'}} alt='leftBlackArrow' src={leftBlackArrow}/>
    const largeNavButton = <NavigationButton hoverBorder={false} width={'50px'} height={'40px'}
                                             displayComponent={leftArrowImage} path={'/aboutVideo'}/>
    const aboutText = <TextBaseManySans color='white' fontSize={'30px'}> About </TextBaseManySans>
    const homeText = <TextBaseManySans color='white' fontSize='30px'> Home </TextBaseManySans>
    const exploreText = <TextBaseManySans color='white' fontSize='30px'> Explore </TextBaseManySans>
    const videoText = <TextBaseManySans color='white' fontSize='30px'> Video </TextBaseManySans>

    return (
        <MainContainer color={'white'} flexDirection={'column'}>
            {/*<div style={{position:'absolute',left:100}}>*/}
            {/*    {largeNavButton}*/}
            {/*</div>*/}
            {loading && <CircularProgress style={{position: 'absolute', top: '50vh'}} color="black"/>}
            <video poster="../assets/many/MANY_Small.png" onCanPlay={() => setLoading(false)}
                   style={{height: '75vh', width: '100vh'}} src={require('../assets/video/MANY_HS_1.m4v').default}
                   autoPlay={true} loop={true}/>
            <div style={{
                height:40,
                bottom:0,
                width:'100vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent:'center',
                margin: 'auto',
                gap:150,
                position:'absolute',
                backgroundColor:'#1d1d1d'
            }}>
                <NavigationButton hoverBorder={false} width={'165px'} height={'40px'} path={'/'}
                                  displayComponent={homeText}/>
                <NavigationButton hoverBorder={false} width={'165px'} height={'40px'} path={'/about'}
                                  displayComponent={aboutText}/>
                <NavigationButton hoverBorder={false} width={'255px'} height={'40px'} path={'/explore'}
                                  displayComponent={exploreText}/>
                <NavigationButton hoverBorder={false} width={'165px'} height={'40px'} path={'/aboutVideo'}
                                  displayComponent={videoText}/>
            </div>
        </MainContainer>
    )
}

export default RootVideo;

