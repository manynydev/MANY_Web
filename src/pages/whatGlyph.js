import React, {useState} from 'react';
import {
    MainContainer,
    TextHeaderCush,
    IphoneScreen,
    LeftBlackButton, ManyHomeButton, RightBlackButton, TextBaseManySans, NavButtonsContainer
} from "../components";

function WhatGlyph() {

    const [glyph, setGlyph] = useState('');


    return (
        <MainContainer>
            <IphoneScreen>
                <div style={{margin: '15px'}}>
                    <TextHeaderCush>What is your glyph?</TextHeaderCush>
                </div>
                <div style={{position: 'relative', top: 150, left: 90, width: 120}}>
                    <input
                        accept="image/*"
                        style={{display: "none"}}
                        type="file"
                        id="contained-button-file"
                        onChange={(event) => {
                            setGlyph(URL.createObjectURL(event.target.files[0]))
                        }}
                    />
                    {glyph ? <img style={{height: 120, position: 'relative', margin: 'auto', right: 15, bottom: 40}}
                                  alt={'uploaded glyph'} src={glyph}/> : <label htmlFor="contained-button-file">
                        <TextBaseManySans fontSize={'19px'} style={{
                            cursor: 'pointer',
                            color: '#bdbdbd',
                            position: 'relative',
                            right: 10,
                            margin: 'auto'
                        }}>Choose
                            image</TextBaseManySans>
                    </label>}

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

