import React, {useState, useEffect} from 'react';
import {IphoneFrame, MainContainer} from "../components/index";
import {CircularProgress} from "@material-ui/core";


function Platform() {

    const [frame1loading, setFrame1Loading] = useState(true);
    const [frame2loading, setFrame2Loading] = useState(true);
    const [framesLoading, setFramesLoading] = useState(true);


    return (
        <MainContainer flexDirection={'row'}>
            {(frame1loading || frame2loading || framesLoading) && <CircularProgress color="black"/>}
            <div style={{display: 'flex', gap: 80, flexDirection: 'row', position: 'fixed'}}>
                <IphoneFrame/>
                <IphoneFrame/>
            </div>
            <div onLoad={() => setFramesLoading(false)} style={{
                zIndex: 0,
                overflow: 'hidden',
                display: 'flex',
                gap: 174,
                marginTop: 3,
                marginRight: 5,
                flexDirection: 'row',
                position: 'fixed'
            }}>
                <iframe loading={'lazy'} onLoad={() => {
                    setFrame1Loading(false)
                }}
                        style={{scrolling: 'no', height: '535px', width: '300px', border: 'none', overflow: 'hidden'}}
                        src={'http://localhost:3000/home'}/>
                <iframe loading={'lazy'} onLoad={() => {
                    setFrame2Loading(false)
                }}
                        style={{scrolling: 'no', height: '535px', width: '300px', border: 'none', overflow: 'hidden'}}
                        src={'http://localhost:3000/matching'}/>
            </div>
        </MainContainer>
    )

}

export default Platform;
