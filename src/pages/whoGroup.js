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

    const [logo, setLogo] = useState(sharedStore.getState().logoImg);

    useEffect(() => {
        sharedStore.dispatch({type: 'logoImg', value: logo}
        )
    }, [logo])


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
                        value={sharedStore.getState().sponsor}
                        onChange={(event) => sharedStore.dispatch({type: 'sponsor', value: event.target.value})}
                    />
                    <Input
                        placeholder="Website address"
                        color='black'
                        disableUnderline={true}
                        style={{width: '90%', fontFamily: 'MANYSans,sans-serif', fontSize: 'large'}}
                        value={sharedStore.getState().webAddress}
                        onChange={(event) => sharedStore.dispatch({type: 'webAddress', value: event.target.value})}
                    />
                    <input
                        accept="image/*"
                        style={{display: "none"}}
                        type="file"
                        id="contained-button-file"
                        onChange={(event) => {
                            setLogo(URL.createObjectURL(event.target.files[0]))
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


