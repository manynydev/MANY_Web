import React from 'react';
import {
    MainContainer,
    IphoneFrame,
    TextHeaderCush,
    IphoneScreen,
    TextBaseCush,
    LeftBlackButton, ManyHomeButton, RightBlackButton, NavButtonsContainer
} from "../components";

function WhatExchange() {


    return (
        <MainContainer>
            <IphoneScreen>
                <div style={{margin: '15px'}}>
                    <TextHeaderCush>What is the exchange?</TextHeaderCush>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', position: 'relative', top: '10px', left: '10px'}}>

                    <div style={{marginTop: '50px',}}>
                        <TextBaseCush fontSize='20px'> The group needs to engage _______ to ______. The group offers ______. </TextBaseCush>
                    </div>
                </div>
                <NavButtonsContainer>
                    <LeftBlackButton path={'/whereGroup'}/>
                    <ManyHomeButton path={'/home'}/>
                    <RightBlackButton path={'/whatDuration'}/>
                </NavButtonsContainer>
            </IphoneScreen>
        </MainContainer>
    )
}

export default WhatExchange;

