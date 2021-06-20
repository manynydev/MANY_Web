import React, {useRef} from 'react';
import {
    MainContainer,
    IphoneScreen,
    TextBaseGothic,
    RightWhiteButton
} from "../components";
import {SnapList, SnapItem, useDragToScroll} from "react-snaplist-carousel";
import {useLocation} from "react-router-dom";


function createMonthsElements() {
    let months = [];
    for (let i = 1; i <= 24; i++) {
        months.push(
            <SnapItem margin={{top: '10px', bottom: '10px'}} height="80px" snapAlign="center">
                <TextBaseGothic
                    style={{
                        color: 'white',
                        fontWeight: 'regular',
                        fontSize: '72px',
                        // paddingBottom: i === 24 ? 395 : 0,
                        // paddingTop: i === 1 ? 40 : 0
                    }}>{i}
                </TextBaseGothic>
            </SnapItem>)
    }
    return months
}

//TODO: Dynamically adjust months text margin left when month int is not double digit (0-9)

const WhatDurationMonths = () => {
    const location = useLocation();
    const [navProps, setNavProps] = React.useState(location.navProps);

    const snapList = useRef(null);
    useDragToScroll({ref: snapList, disable: false});

    const months = createMonthsElements();

    return (
        <MainContainer>
            <IphoneScreen style={{backgroundColor: '#161616'}}>
                <TextBaseGothic style={{
                    position: 'absolute',
                    color: 'white',
                    marginLeft: '120px',
                    marginTop: 105,
                    fontWeight: 'regular',
                    fontSize: '15px'
                }}>months
                </TextBaseGothic>
                <div style={{marginLeft: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <SnapList width='70px' height='538px' direction="vertical" ref={snapList}>
                        {months}
                    </SnapList>
                </div>
                <RightWhiteButton style={{position: 'relative', left: 188, bottom: 133, height: '19px'}}
                                  path={'/whatDuration'}/>
            </IphoneScreen>
        </MainContainer>
    )
}


export default WhatDurationMonths
