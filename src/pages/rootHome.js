import React from "react";
import {NavigationButton, MainContainer, TextBaseManySans} from "../components/index"
import MANYLogoLarge from "../assets/many/MANY_Home_Logo.png";


function RootHome() {

    const aboutText = <TextBaseManySans color='white' fontSize={'30px'}> About </TextBaseManySans>
    const homeText = <TextBaseManySans color='white' fontSize='30px'> Home </TextBaseManySans>
    const exploreText = <TextBaseManySans color='white' fontSize='30px'> Explore </TextBaseManySans>
    const videoText = <TextBaseManySans color='white' fontSize='30px'> Video </TextBaseManySans>

    return (
        <MainContainer color={'white'} flexDirection={'column'}>
            <div style={{margin: 'auto', width: 800,position:'relative'}}>
                <div style={{margin: 'auto', width: '100%'}}>
                    <img alt="logo" style={{width: '95%'}} src={MANYLogoLarge}/>
                </div>
            </div>
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

export default RootHome;

