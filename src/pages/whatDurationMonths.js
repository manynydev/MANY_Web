import React, {useEffect, useRef} from 'react';
import {
    MainContainer,
    IphoneScreen,
    TextBaseGothic,
    RightWhiteButton
} from "../components";
import {SnapList, SnapItem, useDragToScroll,useScroll} from "react-snaplist-carousel";





const WhatDurationMonths = () => {

    const snapList = useRef(null);
    const lastSnapItem = useRef(null);
    const goToSnapItem = useScroll({ ref: snapList });
    useDragToScroll({ref:snapList});

    useEffect(() => {
        goToSnapItem(14);
        console.log(lastSnapItem.current?.focus());
        console.log(snapList.current?.children);
    },[])

    function createMonthsElements() {
        let months = [];
        for (let i = 0; i <= 29; i++) {
            months.push(
                <SnapItem margin={{top: '2px'}} height="80px" snapAlign="center">
                    <TextBaseGothic
                        onClick={() => goToSnapItem(i+2)}
                        style={{
                            color: `${ i > 24 || i === 0 ? '#161616' :'white'}`,
                            fontWeight: 'regular',
                            fontSize: '72px',
                        }}>{i}
                    </TextBaseGothic>
                </SnapItem>)
        }
        return months
    }

    const months = createMonthsElements();
    return (
        <MainContainer>
            <IphoneScreen style={{backgroundColor: '#161616'}}>
                <TextBaseGothic style={{
                    position: 'absolute',
                    color: 'white',
                    marginLeft: '105px',
                    marginTop: 121,
                    fontWeight: 'regular',
                    fontSize: '15px'
                }}>months
                </TextBaseGothic>
                <div style={{marginLeft: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <SnapList width='10px' height='538px' direction="vertical" ref={snapList}>
                        {months}
                    </SnapList>
                </div>
                <div style={{position: 'absolute', right: -10, bottom: 15}}>
                    <RightWhiteButton path={'/whatDuration'}/>
                </div>
            </IphoneScreen>
        </MainContainer>
    )
}


export default WhatDurationMonths
