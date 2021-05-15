import React, {useEffect, useState} from 'react';
import {NavigationButton, IphoneScreen, MainContainer, TextBaseCush,ManyLogo} from "../components/index";
import {CircularProgress} from "@material-ui/core";

function Home (){

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);


    const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
            return p.toString() === "[object SafariRemoteNotification]";
        })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));

        const signInButtonDisplayComponent = <TextBaseCush>Sign in</TextBaseCush>
        const createGroupButtonDisplayComponent = <TextBaseCush>Create a group</TextBaseCush>
        const viewPrevGroupsButtonDisplayComponent = <TextBaseCush>View previous groups</TextBaseCush>
        return (
            <MainContainer>
                <>
                    {loading ? (<CircularProgress color="black" />) :
                        (<IphoneScreen>
                    {/*//TODO: Make logo a nav button to info page*/}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '90px',
                        marginTop: '210px'
                    }}>
                        <NavigationButton height='70px' width='170px' path={'/home'} displayComponent=<ManyLogo/>/>
                        <div
                            style={{
                                // Safari does not support the CSS gap property for flex.
                                marginTop: isSafari ? '90px' : 0,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '5px'
                            }}
                        >
                            <NavigationButton path={'/'} width={'90px'} height={'35px'}
                                              displayComponent={signInButtonDisplayComponent}/>
                            <NavigationButton path={'/whoGroup'} width={'170px'} height={'35px'}
                                              displayComponent={createGroupButtonDisplayComponent}/>
                            <NavigationButton path={'/matching'} width={'240px'} height={'35px'}
                                              displayComponent={viewPrevGroupsButtonDisplayComponent}/>
                        </div>
                    </div>
                </IphoneScreen>)}</>
            </MainContainer>
        )
}

export default Home;

