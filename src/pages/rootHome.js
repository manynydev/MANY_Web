import React from "react";
import {NavigationButton, MainContainer, TextBaseManySans} from "../components/index"
import MANYLogoLarge from "../assets/many/MANY_Large.png";


function RootHome() {

    const aboutText = <TextBaseManySans fontSize='30px'> About </TextBaseManySans>
    const platformText = <TextBaseManySans fontSize='30px'> Platform </TextBaseManySans>
    const videoText = <TextBaseManySans fontSize='30px'> Video </TextBaseManySans>

    return (
        <MainContainer color={'white'} flexDirection={'column'}>
            <div style={{margin: 'auto', marginTop: 300, width: 800}}>
                <div style={{margin: 'auto', width: '100%'}}>
                    <img alt="logo" style={{width: '100%'}} src={MANYLogoLarge}/>
                </div>
                <div style={{
                    width: '100%',
                    marginLeft: 15,
                    top:50,
                    display: 'flex',
                    flexDirection: 'row',
                    margin: 'auto',
                    position:'relative'
                }}>
                    <div style={{marginLeft: 20}}>

                    <NavigationButton hoverBorder={true} width={'90px'} height={'40px'} path={'/about'}
                                      displayComponent={aboutText}/>
                    </div>
                    <div style={{marginLeft: 236}}>
                        <NavigationButton hoverBorder={true} width={'140px'} height={'40px'} path={'/platform'}
                                          displayComponent={platformText}/>
                    </div>
                    <div style={{marginLeft: 185}}>
                        <NavigationButton hoverBorder={true} width={'90px'} height={'40px'} path={'/video'}
                                          displayComponent={videoText}/>
                    </div>
                </div>
            </div>
        </MainContainer>
    )

}

export default RootHome;

