import React from "react";
import {NavigationButton, MainContainer, TextBaseManySans} from "../components/index"
import MANYLogoLarge from "../assets/many/MANY_Home_Logo.png";


function RootHome() {

    const aboutText = <TextBaseManySans fontSize='60px'> About </TextBaseManySans>
    const platformText = <TextBaseManySans fontSize='60px'> Platform </TextBaseManySans>
    const videoText = <TextBaseManySans fontSize='60px'> Video </TextBaseManySans>

    return (
        <MainContainer color={'white'} flexDirection={'column'}>
            <div style={{margin: 'auto', width: 800,position:'relative',bottom:100}}>
                <div style={{margin: 'auto', width: '100%'}}>
                    <img alt="logo" style={{width: '95%'}} src={MANYLogoLarge}/>
                </div>
                <div style={{
                    width: '100%',
                    right:30,
                    top:180,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent:'space-evenly',
                    margin: 'auto',
                    position:'relative'
                }}>
                    <div style={{position:'relative',right:110}}>
                    <NavigationButton hoverBorder={true} width={'165px'} height={'62px'} path={'/about'}
                                      displayComponent={aboutText}/>
                    </div>
                    <div style={{position:'relative',left:15}}>
                        <NavigationButton hoverBorder={true} width={'255px'} height={'62px'} path={'/platform'}
                                          displayComponent={platformText}/>
                    </div>
                    <div style={{position:'relative',left:140}}>
                        <NavigationButton hoverBorder={true} width={'165' +
                        'px'} height={'62px'} path={'/video'}
                                          displayComponent={videoText}/>
                    </div>
                </div>
            </div>
        </MainContainer>
    )

}

export default RootHome;

