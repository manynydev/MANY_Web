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

    const exploreArrowButton = <div style={{
        display: 'flex',
        flexDirection: 'row',
        width: 40,
        alignItems: 'center',
        position: 'relative',
        bottom: 3
    }}>
        <img style={{height: 20, position: "relative", top: 3,imageRendering: '-webkit-optimize-contrast'}} alt="rightBlackArrow" src={rightBlackArrow}/>
        <TextBaseGothic fontSize='24px'>{"Explore"}</TextBaseGothic>
    </div>


    return (
        <MainContainer display={"block"} color={'white'} flexDirection={'column'}>
            <div style={{
                lineHeight: 1.7,
                top: 10,
                margin: 'auto',
                position: 'relative',
                whiteSpace: 'pre-wrap',
                width: "60%"
            }}>
                <TextBaseGothic fontSize={'30px'}>
                    {"Explore MANY"}
                    {"\n"}
                    {"\n"}
                </TextBaseGothic>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        right: 10,
                        bottom: 30,
                        gap: 5
                    }}>
                    <NavigationButton justifyContent={'initial'} width={'130px'}
                                      displayComponent={exploreArrowButton} path={"/platform"}/>
                </div>
                <TextBaseGothic fontSize={'17px'}>
                    {"The first page of the platform offers three choices: "}
                </TextBaseGothic>
                <TextBaseGothic fontStyle={'italic'} fontSize={'17px'}>
                    {"Sign in, Create a group, and View previous groups.\n \n"}
                </TextBaseGothic>
                <TextBaseGothic fontSize={'17px'}>
                    {"Click on "}
                </TextBaseGothic>
                <TextBaseGothic fontStyle={'italic'} fontSize={'17px'}>
                    {"Create a Group "}
                </TextBaseGothic>
                <TextBaseGothic fontSize={'17px'}>
                    {"to see how an entry might be constructed, or see a sample entry "}
                </TextBaseGothic>
                <a href="https://drive.google.com/file/d/1zAeHReFnim_o4hJ26VoG9uj9KYLl21We/view?usp=sharing">here.</a>
                <TextBaseGothic fontSize={'17px'}>
                    {"\n\nClick on" }
                </TextBaseGothic>
                 <TextBaseGothic fontStyle ={'italic'} fontSize={'17px'}>
                     {" View Previous Groups "}
                </TextBaseGothic>
                <TextBaseGothic fontSize={'17px'}>
                    {"to explore the various matches made between the\n" +
                        "representative entries. In general, groups who want to travel or collaborate are on top,\n" +
                        "and groups in need of travelers or collaborators are on the bottom. Single click on any\n" +
                        "group on the top and scroll through possible matches on the bottom. For any group,\n" +
                        "swipe up or down to read a short explanation of the need. On these pages, you may be\n" +
                        "prompted to click on an additional description that contextualizes the entry.\n"
                        + "\nClicking on the MANY logo at the bottom of the page returns you to the opening page.\n"}
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
                <NavigationButton hoverBorder={false} width={'165px'} height={'40px'} path={'/aboutVideo'}
                                  displayComponent={videoText}/>
            </div>
        </MainContainer>
    )
}

export default RootExplore;

