import React from 'react';
import {TextField, Button, Input} from '@material-ui/core'
import {
    IphoneFrame,
    MainContainer,
    TextHeaderCush,
    TextBaseManySans,
    IphoneScreen,
    LeftBlackButton,
    RightBlackButton,
    ManyHomeButton, NavButtonsContainer
} from "../components/index";


function WhoGroup() {

    // const [sponsor, setSponser] = React.useState("");
    // const [webAddress, setWebAddress] = React.useState("");

    return (
        <MainContainer>
            <IphoneScreen>
                <div style={{margin: '15px'}}>
                    <TextHeaderCush>Who is in the group?</TextHeaderCush>
                </div>
                <div
                    style={{display: 'flex', flexDirection: 'column', position: 'relative', top: '10px', left: '20px'}}>
                    <Input
                        placeholder="Name of sponsor"
                        color='black'
                        disableUnderline={true}
                        style={{width: '90%', fontFamily: 'MANYSans,sans-serif', fontSize: 'large'}}
                    />
                    <Input
                        placeholder="Website address"
                        color='black'
                        disableUnderline={true}
                        style={{width: '90%', fontFamily: 'MANYSans,sans-serif', fontSize: 'large'}}
                    />
                    <input
                        accept="image/*"
                        style={{display: "none"}}
                        type="file"
                        id="contained-button-file"
                    />
                    <label htmlFor="contained-button-file">
                        {/*<Button variant="text" component="span">*/}
                        <TextBaseManySans fontSize={'19px'} style={{cursor: 'pointer', color: '#bdbdbd'}}>Upload
                            logo</TextBaseManySans>
                        {/*</Button>*/}
                    </label>
                </div>
                <NavButtonsContainer>
                {/*<div style={{display: 'flex', flexDirection: 'row', position: 'relative', top: '336px', gap: '55px'}}>*/}
                    <LeftBlackButton path={'/home'}/>
                    <ManyHomeButton path={'/home'}/>
                    <RightBlackButton path={'/whereGroup'}/>
                </NavButtonsContainer>
                {/*</div>*/}
            </IphoneScreen>
        </MainContainer>
    );
}

export default WhoGroup;


