import React from "react";
import {NavigationButton, MainContainer, TextBaseGothic, ManyLogo} from "../components/index";


function RootHome() {

    const aboutText = <TextBaseGothic fontSize='40px'> ABOUT </TextBaseGothic>
    const platformText = <TextBaseGothic fontSize='40px'> PLATFORM </TextBaseGothic>
    const videoText = <TextBaseGothic fontSize='40px'> VIDEO </TextBaseGothic>

    return (
        <MainContainer color={'white'} flexDirection={'column'}>
            <div style={{margin: 'auto',marginTop:300}}>
                <ManyLogo/>
            </div>
            <div style={{display: 'flex',gap:150, flexDirection: 'row', margin: 'auto'}}>
                <NavigationButton hoverBorder={true}  width={'150px'} height={'55px'} path={'/about'} displayComponent={aboutText}/>
                <NavigationButton hoverBorder={true}  width={'230px'} height={'55px'} path={'/platform'} displayComponent={platformText}/>
                <NavigationButton hoverBorder={true}  width={'140px'} height={'55px'} path={'/video'} displayComponent={videoText}/>
            </div>
        </MainContainer>
    )

}

export default RootHome;

