import React from 'react';
import {
    MainContainer,
    IphoneFrame,
    TextHeaderCush,
    IphoneScreen,
    TextBaseGothic,
    NavigationButton, LeftBlackButton, ManyHomeButton, RightBlackButton, TextBaseManySans, NavButtonsContainer
} from "../components";

function WhatGlyph() {


    return (
        <MainContainer>
            <IphoneScreen>
                <div style={{margin: '15px'}}>
                    <TextHeaderCush>What is your glyph?</TextHeaderCush>
                </div>
                <div style={{position:'relative',top:'150px',left:'100px',width:'120px'}}>
                    <input
                        accept="image/*"
                        style={{display: "none"}}
                        type="file"
                        id="contained-button-file"
                    />
                    <label htmlFor="contained-button-file">
                        {/*<Button variant="text" component="span">*/}
                        <TextBaseManySans fontSize={'19px'} style={{cursor: 'pointer', color: '#bdbdbd'}}>Choose image</TextBaseManySans>
                        {/*</Button>*/}
                    </label>
                </div>
                <NavButtonsContainer>
                    <LeftBlackButton path={'/whatDuration'}/>
                    <ManyHomeButton path={'/home'}/>
                    <RightBlackButton path={'/matching'}/>
                </NavButtonsContainer>
            </IphoneScreen>
        </MainContainer>
    )
}

export default WhatGlyph;

