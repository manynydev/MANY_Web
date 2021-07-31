import React from "react";
import {NavigationButton, MainContainer, TextBaseManySans} from "../components/index"
import MANYLogoLarge from "../assets/many/MANY_Home_Logo.png";


function RootHome() {

    const aboutText = <TextBaseManySans color='white' fontSize='30px'> About </TextBaseManySans>
    const platformText = <TextBaseManySans color='white' fontSize='30px'> Platform </TextBaseManySans>
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
                backgroundColor:'#0c0c0c'
            }}>
                <div style={{position:'relative',right:0}}>
                    <NavigationButton hoverBorder={true} width={'165px'} height={'40px'} path={'/about'}
                                      displayComponent={aboutText}/>
                </div>
                <div style={{position:'relative',left:0}}>
                    <NavigationButton hoverBorder={true} width={'255px'} height={'40px'} path={'/platform'}
                                      displayComponent={platformText}/>
                </div>
                <div style={{position:'relative',left:0}}>
                    <NavigationButton hoverBorder={true} width={'165' +
                    'px'} height={'40px'} path={'/video'}
                                      displayComponent={videoText}/>
                </div>
            </div>
        </MainContainer>
    )

}

export default RootHome;

