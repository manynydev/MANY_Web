import React from 'react';
import {
    MainContainer,
    TextHeaderCush,
    IphoneScreen,
    TextBaseGothic,
    NavigationButton, LeftBlackButton, ManyHomeButton, RightBlackButton, NavButtonsContainer
} from "../components";
import {sharedStore} from "../components/hooks";

function WhatDuration() {

    const monthsIntElement = <TextBaseGothic fontSize='72px'> {sharedStore.getState().duration ?? '12'} </TextBaseGothic>

    return (
        <MainContainer>
            <IphoneScreen>
                <div style={{margin: '15px'}}>
                    <TextHeaderCush>What is the duration?</TextHeaderCush>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', position: 'relative', top: '10px', left: '10px'}}>
                    <NavigationButton width={'95px'} displayComponent={monthsIntElement} path={'/whatDurationMonths'}
                                      height={'80px'}/>
                    <div style={{marginTop: '50px'}}>
                        <TextBaseGothic fontSize='15px'> months </TextBaseGothic>
                    </div>
                </div>
                <NavButtonsContainer>
                    <LeftBlackButton path={'/whatExchange'}/>
                    <ManyHomeButton path={'/home'}/>
                    <RightBlackButton path={'/whatGlyph'}/>
                </NavButtonsContainer>
            </IphoneScreen>
        </MainContainer>
    )
}

export default WhatDuration;

