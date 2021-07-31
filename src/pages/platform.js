import React, {useState} from 'react';
import {IphoneFrame, MainContainer, TextBaseManySans} from "../components/index";
import {CircularProgress} from "@material-ui/core";
import NavigationButton from "../components/navigationButton";

function Platform() {

    const [frame1loading, setFrame1Loading] = useState(true);
    const [frame2loading, setFrame2Loading] = useState(true);
    const [framesLoading, setFramesLoading] = useState(true);
    const aboutText = <TextBaseManySans color='white' fontSize={'30px'}> About </TextBaseManySans>
    const platformText = <TextBaseManySans color='white' fontSize='30px'> Platform </TextBaseManySans>
    const videoText = <TextBaseManySans color='white' fontSize='30px'> Video </TextBaseManySans>

    return (
        <MainContainer flexDirection={'row'}>
            {(frame1loading || frame2loading || framesLoading) && <CircularProgress style={{position:'relative'}} color="black"/>}
            <div style={{display: 'flex', gap: 100, flexDirection: 'row', position: 'fixed'}}>
                <IphoneFrame/>
                <IphoneFrame/>
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

export default Platform;
