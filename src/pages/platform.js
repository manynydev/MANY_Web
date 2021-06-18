import React, {useState, useEffect} from 'react';
import {IphoneFrame, LeftBlackButton, MainContainer, NavButtonsContainer} from "../components/index";
import {CircularProgress} from "@material-ui/core";
import leftBlackArrow from "../assets/icons/left_black.png";
import NavigationButton from "../components/navigationButton";

function Platform() {

    const [frame1loading, setFrame1Loading] = useState(true);
    const [frame2loading, setFrame2Loading] = useState(true);
    const [framesLoading, setFramesLoading] = useState(true);

    const leftArrowImage = <img style={{height:35,position:'absolute'}} alt='leftBlackArrow' src={leftBlackArrow}/>
    const largeNavButton = <NavigationButton hoverBorder={true} width={'50px'} height={'40px'}displayComponent={leftArrowImage} path={'/rootHome'}/>

    return (
        <MainContainer flexDirection={'row'}>
            {(frame1loading || frame2loading || framesLoading) && <CircularProgress color="black"/>}
            <div style={{display: 'flex', gap: 100, flexDirection: 'row', position: 'fixed'}}>
                <IphoneFrame/>
                <IphoneFrame/>
            </div>
            <div style={{position:'relative',right:800}}>
                {largeNavButton}
            </div>
            <div onLoad={() => setFramesLoading(false)} style={{
                zIndex: 0,
                overflow: 'hidden',
                display: 'flex',
                gap: 176,
                marginTop: 3,
                marginRight: 5,
                flexDirection: 'row',
                position: 'fixed'
            }}>
                <iframe loading={'lazy'} onLoad={() => {
                    setFrame1Loading(false)
                }}
                        style={{scrolling: 'no', height: 444, width: 250, border: 'none', overflow: 'hidden'}}
                        src={'http://localhost:3000/home'}/>
                <iframe loading={'lazy'} onLoad={() => {
                    setFrame2Loading(false)
                }}
                        style={{scrolling: 'no', height: 443, width: 250, border: 'none', overflow: 'hidden'}}
                        src={'http://localhost:3000/matching'}/>
            </div>
        </MainContainer>
    )

}

export default Platform;
