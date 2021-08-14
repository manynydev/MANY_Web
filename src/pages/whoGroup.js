import React, {useEffect, useState} from 'react';
import {Input} from '@material-ui/core'
import {
    MainContainer,
    TextHeaderCush,
    TextBaseManySans,
    IphoneScreen,
    LeftBlackButton,
    RightBlackButton,
    ManyHomeButton, NavButtonsContainer
} from "../components/index";
import {sharedStore} from "../components/hooks";


function WhoGroup() {

    useEffect(() => {
        console.log(sharedStore.getState());
    }, [])

    const [sponsor, setSponsor] = useState(sharedStore.getState().sponsor);
    const [webAddress, setWebAddress] = useState(sharedStore.getState().webAddress);
    const [logo, setLogo] = useState(sharedStore.getState().logoImg);

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
                        value={sponsor}
                        onChange={(event) => {
                            setSponsor(event.target.value);
                            sharedStore.dispatch({type: 'sponsor', value: event.target.value})
                        }}
                    />
                    <Input
                        placeholder="Website address"
                        color='black'
                        disableUnderline={true}
                        style={{width: '90%', fontFamily: 'MANYSans,sans-serif', fontSize: 'large'}}
                        value={webAddress}
                        onChange={(event) => {
                            setWebAddress(event.target.value);
                            sharedStore.dispatch({type: 'webAddress', value: event.target.value})
                        }}
                    />
                    <input
                        accept="image/*"
                        style={{display: "none"}}
                        type="file"
                        id="contained-button-file"
                        onChange={(event) => {
                            setLogo(URL.createObjectURL(event.target.files[0]));
                            sharedStore.dispatch({type: 'logoImg', value: URL.createObjectURL(event.target.files[0])})
                        }}
                    />
                    {<label htmlFor="contained-button-file"> {logo ? <img
                            style={{maxHeight: '30%', maxWidth: '40%', position: 'relative', margin: 'auto', top: 5}}
                            alt={'uploaded glyph'} src={logo}/>
                        :
                        <TextBaseManySans fontSize={'19px'} style={{
                            cursor: 'pointer',
                            color: '#bdbdbd',
                            position: 'relative',
                            margin: 'auto'
                        }}>Upload logo</TextBaseManySans>}
                    </label>}
                </div>
                <NavButtonsContainer>
                    <LeftBlackButton goBack={true} path={'/home'}/>
                    <ManyHomeButton path={'/home'}/>
                    <RightBlackButton path={'/whereGroup'}/>
                </NavButtonsContainer>
            </IphoneScreen>
        </MainContainer>
    );
}

export default WhoGroup;


