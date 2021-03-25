import React, {useRef} from 'react';
import {MainContainer, IphoneFrame, IphoneScreen, TextBaseGothic} from "../components";
import {SnapList, SnapItem, useDragToScroll} from "react-snaplist-carousel";


function createMonthsElements() {
    let months = [];
    for (let i = 1; i <= 24; i++) {
        months.push(
            <SnapItem margin={{top: '10px', bottom: '10px'}} height="80px" snapAlign="center">
                <TextBaseGothic
                    style={{
                        color: 'white',
                        fontWeight: 'regular',
                        fontSize: '80px',
                        // paddingBottom: i === 24 ? 395 : 0,
                        // paddingTop: i === 1 ? 40 : 0
                    }}>{i}
                </TextBaseGothic>
            </SnapItem>)
    }
    return months
}

//TODO: Adjust months text margin left when month int is not double digit (0-9)

const WhatDurationMonths = () => {
    const snapList = useRef(null);
    useDragToScroll({ref: snapList, disable: false});

    const months = createMonthsElements();

    return (
        <MainContainer>
            <IphoneFrame/>
            <IphoneScreen style={{backgroundColor: '#161616'}}>
                <TextBaseGothic style={{
                    position: 'absolute',
                    color: 'white',
                    marginLeft: '120px',
                    marginTop: 105,
                    fontWeight: 'regular',
                    fontSize: '20px'
                }}>months
                </TextBaseGothic>
                <div style={{marginLeft:'20px',display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <SnapList width='85' height='538px' direction="vertical" ref={snapList}>
                        {months}
                    </SnapList>
                </div>
            </IphoneScreen>
        </MainContainer>
    )
}


export default WhatDurationMonths