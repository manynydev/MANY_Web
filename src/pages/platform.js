import React, {useState,useEffect} from 'react';
import {IphoneFrame, MainContainer, TextBaseManySans} from "../components/index";
import {CircularProgress} from "@material-ui/core";
import NavigationButton from "../components/navigationButton";

function Platform() {

    const [frame1loading, setFrame1Loading] = useState(true);
    const [frame2loading, setFrame2Loading] = useState(true);
    const [framesLoading, setFramesLoading] = useState(true);
    const aboutText = <TextBaseManySans color='white' fontSize={'30px'}> About </TextBaseManySans>
    const homeText = <TextBaseManySans color='white' fontSize='30px'> Home </TextBaseManySans>
    const exploreText = <TextBaseManySans color='white' fontSize='30px'> Explore </TextBaseManySans>
    const videoText = <TextBaseManySans color='white' fontSize='30px'> Video </TextBaseManySans>
    const platformText = <TextBaseManySans color='white' fontSize='30px'> Platform </TextBaseManySans>

    useEffect(()=>{
        if(!framesLoading){
            document.getElementById("frame1").contentWindow.document.body.style.overflow='hidden';
            document.getElementById("frame2").contentWindow.document.body.style.overflow='hidden';
        }
    },[framesLoading])


    return (
        <MainContainer flexDirection={'row'}>
            {(frame1loading || frame2loading || framesLoading) && <CircularProgress style={{position:'relative'}} color="black"/>}
            <div style={{display: 'flex', gap: 100, flexDirection: 'row',marginBottom:55, position: 'fixed'}}>
                <IphoneFrame/>
                <IphoneFrame/>
            </div>
            <div onLoad={() => setFramesLoading(false)} style={{
                zIndex: 0,
                overflow: 'hidden',
                display: 'flex',
                gap: 176,
                marginTop: 2,
                marginRight: 3,
                flexDirection: 'row',
                position: 'fixed'
            }}>
                <iframe id={"frame1"} loading={'lazy'} onLoad={() => {
                    setFrame1Loading(false)
                }}

                        style={{scrolling: 'no', height: 444, width: 250,marginBottom:55, border: 'none', overflow: 'hidden'}}
                        src={'http://localhost:3000/home'}/>
                <iframe id={"frame2"}  loading={'lazy'} onLoad={() => {
                    setFrame2Loading(false)
                }}
                        style={{scrolling: 'no', height: 443, width: 250, border: 'none', overflow: 'hidden'}}
                        src={'http://localhost:3000/matching'}/>
            </div>
            <div style={{
                height:40,
                bottom:0,
                width:'100vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent:'center',
                gap:150,
                position:'fixed',
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

export default Platform;
