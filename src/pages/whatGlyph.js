import React, {useState} from 'react';
import {
    MainContainer,
    TextHeaderCush,
    IphoneScreen,
    LeftBlackButton, ManyHomeButton, RightBlackButton, TextBaseManySans, NavButtonsContainer
} from "../components";
import {sharedStore} from "../components/hooks";

function WhatGlyph() {

    const [glyph, setGlyph] = useState(sharedStore.getState().glyphImg ?? '');


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
                            sharedStore.dispatch({type: 'glyphImg', value: URL.createObjectURL(event.target.files[0])})
                        }}
                    />
                    <label htmlFor="contained-button-file">
                        {glyph ? <img
                                style={{objectFit: 'contain',maxWidth:200, position: 'relative', margin: 'auto', bottom: 105,right:60}}
                                alt={'uploaded glyph'} src={glyph}/> :
                            <TextBaseManySans fontSize={'19px'} style={{
                                cursor: 'pointer',
                                color: '#bdbdbd',
                                position: 'relative',
                                right: 10,
                                margin: 'auto'
                            }}>Choose
                                image</TextBaseManySans>}
                    </label>

                </div>
                <NavButtonsContainer>
                    <LeftBlackButton path={'/whatDuration'}/>
                    <ManyHomeButton path={'/home'}/>
                    <RightBlackButton path={'/whatMore'}/>
                </NavButtonsContainer>
            </IphoneScreen>
        </MainContainer>
    )
}

export default WhatGlyph;

