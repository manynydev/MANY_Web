import React from "react";
import {MainContainer, TextBaseGothic, TextBaseManySans,} from "../components/index";
import rightBlackArrow from "../assets/icons/right_black.png";
import NavigationButton from "../components/navigationButton";


function RootExplore() {
    const leftArrowImage = <img style={{height: 35, position: "absolute"}} alt="rightBlackArrow" src={rightBlackArrow}/>
    const largeNavButton = <NavigationButton hoverBorder={true} width={"50px"} height={"40px"}
                                             displayComponent={leftArrowImage} path={"/rootHome"}/>
    const homeText = <TextBaseManySans color='white' fontSize='30px'> Home </TextBaseManySans>
    const aboutText = <TextBaseManySans color='white' fontSize='30px'> About </TextBaseManySans>
    const platformText = <TextBaseManySans color='white' fontSize='30px'> Platform </TextBaseManySans>
    const videoText = <TextBaseManySans color='white' fontSize='30px'> Video </TextBaseManySans>
    const exploreText = <TextBaseManySans color='white' fontSize='30px'> Explore </TextBaseManySans>


    return (
        <MainContainer color={'white'}>
            {/*<div style={{position: "fixed", top: 475,right:150}}>*/}
            {/*    {largeNavButton}*/}
            {/*</div>*/}
            <div style={{bottom: 230, margin: 'auto', position: 'relative', whiteSpace: 'pre-wrap', width: 900}}>
                <TextBaseGothic fontSize={'30px'}>
                    {"Explore MANY"}
                    {"\n"}
                    {"\n"}
                </TextBaseGothic>
                <TextBaseGothic fontSize={'17px'}>
                    {"The first page of the platform offers three choices: Sign in, Create a group, and View previous groups. Clicking on the MANY logo at the bottom of the page will always return you to the platform's opening menu page.\n"}
                    {"\n"}
                    {"Click on the Create a group menu item to see how an entry is constructed, using the forward/backward icons at the bottom of the page to move through the creation flow. On the final page, click video to see a sample entry being created.\n"}
                    {"\n"}
                    {"Click on View Previous groups to explore the various matches made between the 100 representative entries. In general, groups who want to travel are on top, and groups in need of travelers are on the bottom. Single click on any group on the bottom and scroll through possible matches on the top. Double click on any group at the top and scroll through possible matches on the bottom. For any group, swipe up or down to read a short explanation of the need. On these pages, you may be prompted to click on an additional description that contextualizes the entry.\n"}
                </TextBaseGothic>
            </div>
            <div style={{
                height: 40,
                bottom: 0,
                width: '100vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                margin: 'auto',
                gap: 150,
                position: 'absolute',
                backgroundColor: '#1d1d1d'
            }}>
                <NavigationButton hoverBorder={false} width={'165px'} height={'40px'} path={'/'}
                                  displayComponent={homeText}/>
                <NavigationButton hoverBorder={false} width={'165px'} height={'40px'} path={'/about'}
                                  displayComponent={aboutText}/>
                <NavigationButton hoverBorder={false} width={'255px'} height={'40px'} path={'/explore'}
                                  displayComponent={exploreText}/>
                <NavigationButton hoverBorder={false} width={'255px'} height={'40px'} path={'/platform'}
                                  displayComponent={platformText}/>
                <NavigationButton hoverBorder={false} width={'165px'} height={'40px'} path={'/video'}
                                  displayComponent={videoText}/>
            </div>
        </MainContainer>
    )
}

export default RootExplore;

