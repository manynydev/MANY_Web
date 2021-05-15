import React from "react";
import {NavigationButton, MainContainer, TextBaseGothic, TextBaseManySans} from "../components/index"
import MANYLogoLarge from "../assets/many/MANY_Large.png";



function RootHome() {

    const aboutText = <TextBaseManySans fontSize='40px'> About </TextBaseManySans>
    const platformText = <TextBaseManySans fontSize='40px'> Platform </TextBaseManySans>
    const videoText = <TextBaseManySans fontSize='40px'> Video </TextBaseManySans>

    return (
        <MainContainer color={'white'} flexDirection={'column'}>
            <div style={{margin: 'auto',marginTop:300, width:'40%'}}>
                <img alt="logo" style={{width:'100%'}} src={MANYLogoLarge}/>
            </div>
            <div style={{ width: '40%',position:'relative', bottom: 150,display: 'flex',gap:150, flexDirection: 'row', margin: 'auto'}}>
                <NavigationButton hoverBorder={true}  width={'150px'} height={'55px'} path={'/about'} displayComponent={aboutText}/>
                <NavigationButton hoverBorder={true}  width={'230px'} height={'55px'} path={'/platform'} displayComponent={platformText}/>
                <NavigationButton hoverBorder={true}  width={'140px'} height={'55px'} path={'/video'} displayComponent={videoText}/>
            </div>
        </MainContainer>
    )

}

export default RootHome;

