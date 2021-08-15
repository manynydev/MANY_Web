import React from 'react';
import {Input} from '@material-ui/core'
import {
    MainContainer,
    TextHeaderCush,
    IphoneScreen,
    LeftBlackButton,
    RightBlackButton,
    ManyHomeButton, NavButtonsContainer
} from "../components/index";
import {sharedStore} from "../components/hooks";


function WhatMore() {

    const [usersText, setUsersText] = React.useState(sharedStore.getState().whatMore ?? '');

    return (
        <MainContainer>
            <IphoneScreen>
                <div style={{margin: '15px'}}>
                    <TextHeaderCush>What more?</TextHeaderCush>
                </div>
                <div
                    style={{display: 'flex', flexDirection: 'column', position: 'relative', top: '10px', left: '20px'}}>
                    <Input
                        inputProps={{ spellCheck: 'false' }}
                        placeholder="Anything else to add?"
                        color='black'
                        disableUnderline={true}
                        multiline={true}
                        rowsMax={19}
                        value={usersText}
                        onChange={(event) => {setUsersText(event.target.value)
                        sharedStore.dispatch({type:'whatMore',value:event.target.value})}}
                        style={{width: '90%', fontFamily: 'MANYSans,sans-serif', fontSize: 'large'}}
                    />
                </div>
                <NavButtonsContainer>
                    <LeftBlackButton path={'/whatGlyph'}/>
                    <ManyHomeButton path={'/home'}/>
                    <RightBlackButton path={'/matching'}/>
                </NavButtonsContainer>
            </IphoneScreen>
        </MainContainer>
    );
}

export default WhatMore;


