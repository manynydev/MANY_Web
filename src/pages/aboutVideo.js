import React from "react";
import {MainContainer, TextBaseGothic, TextBaseManySans,} from "../components/index";
import rightBlackArrow from "../assets/icons/right_black.png";
import NavigationButton from "../components/navigationButton";


function RootAbout() {
    const aboutText = <TextBaseManySans color='white' fontSize={'30px'}> About </TextBaseManySans>
    const homeText = <TextBaseManySans color='white' fontSize='30px'> Home </TextBaseManySans>
    const exploreText = <TextBaseManySans color='white' fontSize='30px'> Explore </TextBaseManySans>
    const videoText = <TextBaseManySans color='white' fontSize='30px'> Video </TextBaseManySans>


    const exploreArrowButton = <div style={{display: 'flex', flexDirection: 'row', width: 40, alignItems: 'center'}}>
        <img style={{height: 20, position: "relative", top: 3}} alt="rightBlackArrow" src={rightBlackArrow}/>
        <TextBaseGothic>{"Explore"}</TextBaseGothic>
    </div>

    const videoArrowButton = <div style={{display: 'flex', flexDirection: 'row', width: 40, alignItems: 'center'}}>
        <img style={{height: 20, position: "relative", top: 3}} alt="rightBlackArrow" src={rightBlackArrow}/>
        <TextBaseGothic>{"Video"}</TextBaseGothic>
    </div>


    return (
        <MainContainer color={'white'} flexDirection={'column'}>
            <div style={{
                display: "flex",
                alignItems: 'center',
                overflowY: 'scroll',
                flexDirection: 'column',
                gap: 20,
            }}>
                <div style={{lineHeight: 1.7, whiteSpace: 'break-spaces', width: '60%', top: 10, position: 'relative'}}>
                    <TextBaseGothic fontSize={'30px'}>
                        {"MANY Video"}
                        {"\n"}
                        {"\n"}
                    </TextBaseGothic>
                    <div
                        style={{display: 'flex', flexDirection: 'column', position: 'relative', right: 10, bottom: 30,gap:5}}>
                        <NavigationButton justifyContent={'initial'} width={'130px'} displayComponent={exploreArrowButton} path={"/explore"}/>
                        <NavigationButton justifyContent={'initial'} width={'105px'} displayComponent={videoArrowButton} path={"/video"}/>
                    </div>
                    <TextBaseGothic fontSize={'17px'}>
                    </TextBaseGothic>
                </div>
            </div>

            <div style={{
                height: 40,
                // position: 'fixed',
                bottom: 0,
                width: '100vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 150,
                backgroundColor: '#1d1d1d'
            }}>
                <NavigationButton hoverBorder={false} width={'165px'} height={'40px'} path={'/'}
                                  displayComponent={homeText}/>
                <NavigationButton hoverBorder={false} width={'165px'} height={'40px'} path={'/about'}
                                  displayComponent={aboutText}/>
                <NavigationButton hoverBorder={false} width={'255px'} height={'40px'} path={'/explore'}
                                  displayComponent={exploreText}/>
                <NavigationButton hoverBorder={false} width={'165px'} height={'40px'} path={'/video'}
                                  displayComponent={videoText}/>
            </div>


        </MainContainer>
    )
}

export default RootAbout;

