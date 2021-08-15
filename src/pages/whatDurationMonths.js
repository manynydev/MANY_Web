import React, {useEffect, useRef} from 'react';
import {
    MainContainer,
    IphoneScreen,
    TextBaseGothic,
    RightWhiteButton
} from "../components";
import {SnapList, SnapItem, useDragToScroll, useScroll} from "react-snaplist-carousel";
import {sharedStore} from "../components/hooks";


const WhatDurationMonths = () => {

    const snapList = useRef(null);
    const goToSnapItem = useScroll({ref: snapList});
    const monthPositionMap = {19: 1, 101: 2, 183: 3, 265: 4, 347: 5, 429: 6, 511: 7,593:8,675:9,757:10,839:11,921:12,1003:13,1085:14,1167:15,1249:16,1331:17,1413:18,1495:19,1577:20,1659:21,1741:22,1823:23,1905:24}
    const isDragging = useDragToScroll({ref: snapList});

    function handleScroll() {
       if(isDragging) {
           isDragging.disable();
        }
            sharedStore.dispatch({type: 'duration', value: monthPositionMap[snapList.current?.scrollTop]})
            console.log(sharedStore.getState().duration);
        isDragging.enable();
    }

    useEffect(() => {
        goToSnapItem(sharedStore.getState().duration ? sharedStore.getState().duration + 2 : 14);
    }, [])

    function createMonthsElements() {
        let months = [];
        for (let i = 0; i <= 29; i++) {
            months.push(
                <SnapItem margin={{top: '2px'}} height="80px" snapAlign="center">
                    <TextBaseGothic
                        onClick={() => goToSnapItem(i + 2)}
                        style={{
                            color: `${i > 24 || i === 0 ? '#161616' : 'white'}`,
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
                    <SnapList onScroll={() => {
                        handleScroll()
                    }} width='10px' height='538px' direction="vertical" ref={snapList}>
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
