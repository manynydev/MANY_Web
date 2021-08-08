import React, {useEffect} from 'react';
import {
    MainContainer,
    TextHeaderCush,
    IphoneScreen,
    TextBaseCush,
    LeftBlackButton, ManyHomeButton, RightBlackButton, NavButtonsContainer, NavigationButton, TextBaseManySans
} from "../components";
import {useHistory} from "react-router-dom";

function WhatExchange(props) {
    let history = useHistory();
    const title = <TextBaseManySans color={'#919191'} underline={true} fontSize='18px'> select title </TextBaseManySans>
    const describeActivities = <TextBaseManySans color={'#919191'} underline={true} fontSize='18px'> describe
        activities </TextBaseManySans>


    return (
        <MainContainer>
            <IphoneScreen>
                <div style={{margin: '15px'}}>
                    <TextHeaderCush>What is the exchange?</TextHeaderCush>
                </div>

                <TextBaseCush fontWeight='normal' style={{margin: '15px', top: '50px'}} fontSize='19px'> The group needs
                    to
                    engage</TextBaseCush>

                <div style={{top: '90px',left:'7px', position: 'absolute'}}>
                    <NavigationButton width={'129px'} displayComponent={title} path={'/whatDurationMonths'}
                                      height={'16px'}/>
                </div>
                <TextBaseCush fontWeight='normal' style={{margin: '15px', top: '76px', left: '120px'}}
                              fontSize='19px'> to </TextBaseCush>
                <div style={{top: '115px', position: 'absolute',left:'7px'}}>
                    <NavigationButton width={'195px'} displayComponent={describeActivities} path={'/whatDurationMonths'}
                                      height={'16px'}/>
                </div>
                <TextBaseCush fontWeight='normal' style={{margin: '15px', top: '103px', left: '180px'}}
                              fontSize='19px'>.</TextBaseCush>
                <TextBaseCush fontWeight='normal' style={{margin: '15px', top: '127px'}}
                              fontSize='19px'>The group offers</TextBaseCush>




                <NavButtonsContainer>
                    <LeftBlackButton goBack={true} navProps={history.location.navProps} path={'/whereGroup'}/>
                    <ManyHomeButton path={'/home'}/>
                    <RightBlackButton navProps={props.navProps} path={'/whatDuration'}/>
                </NavButtonsContainer>
            </IphoneScreen>
        </MainContainer>
    )
}

export default WhatExchange;

