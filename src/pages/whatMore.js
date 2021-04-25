import React from 'react';
import {Input} from '@material-ui/core'
import {
    IphoneFrame,
    MainContainer,
    TextHeaderCush,
    IphoneScreen,
    LeftBlackButton,
    RightBlackButton,
    ManyHomeButton
} from "../components/index";


function WhatMore() {

    const [usersText, setUsersText] = React.useState("");

    return (
        <MainContainer>
            <IphoneScreen>
                <div style={{margin: '15px'}}>
                    <TextHeaderCush>What more?</TextHeaderCush>
                </div>
                <div
                    style={{display: 'flex', flexDirection: 'column', position: 'relative', top: '10px', left: '20px'}}>
                    <Input
                        placeholder="Anything else to add?"
                        color='black'
                        disableUnderline={true}
                        multiline={true}
                        rowsMax={19}
                        onChange={(event) => setUsersText(event.target.value)}
                        style={{width: '90%', fontFamily: 'MANYSans,sans-serif', fontSize: 'large'}}
                    />
                </div>
                {/*Bottom button div position is absolute to account for changing number of input text rows*/}
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    position: 'sticky',
                    top: '690px',
                    right: 235,
                    gap: '53px'
                }}>
                    <LeftBlackButton path={'/whatDuration'} navProps={usersText}/>
                    <ManyHomeButton path={'/home'}/>
                    <RightBlackButton path={'/matching'}/>
                </div>
            </IphoneScreen>
        </MainContainer>
    );
}

export default WhatMore;


