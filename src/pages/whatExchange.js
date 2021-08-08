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
    let location = useHistory().location;
    console.log(location);
    const jobTitle = <TextBaseManySans color={'#919191'} underline={true} fontSize='15px'> {location?.navProps?.job? location.navProps.job : 'select title'} </TextBaseManySans>
    const describeActivities = <TextBaseManySans color={'#919191'} underline={true} fontSize='15x'> describe activites </TextBaseManySans>
    const selectOffers = <TextBaseManySans color={'#919191'} underline={true} fontSize='15px'> select
        offers </TextBaseManySans>


    return (
        <MainContainer>
            <IphoneScreen>
                <div style={{margin: '15px'}}>
                    <TextHeaderCush>What is the exchange?</TextHeaderCush>
                </div>
                <div style={{display:'flex',flexDirection:'row',top:'60px',position:'absolute',flexWrap:"wrap",left:'7px',margin:'15px'}}>
                    <TextBaseCush fontWeight='normal' style={{position:'relative'}} fontSize='16px'> The group needs
                        to
                        engage
                    </TextBaseCush>
                    <div style={{position:'relative',right:'7px'}}>
                        <NavigationButton width={jobTitle.props.children.length} navProps={location?.navProps} displayComponent={jobTitle} path={'/jobs'}
                                          height={'16px'}/>
                    </div>
                    <TextBaseCush fontWeight='normal' style={{position:'relative',top:'3px',right:'10px'}}
                                  fontSize='16px'> to </TextBaseCush>

                    <div style={{position:'relative',right:'7px' }}>
                        <NavigationButton width={(describeActivities.props.children.length)} displayComponent={describeActivities} path={'/whatDurationMonths'}
                                          height={'16px'}/>
                    </div>
                    <TextBaseCush fontWeight='normal' style={{position:'relative',top:'4px',right:'15px'}}
                                  fontSize='16px'>.</TextBaseCush>
                    <TextBaseCush fontWeight='normal' style={{position:'relative'}}
                                  fontSize='16px'>The group offers</TextBaseCush>
                    <div style={{position:'relative',bottom:'3px'}}>
                        <NavigationButton width={selectOffers.props.children.length} displayComponent={selectOffers} path={'/whatDurationMonths'}
                                          height={'16px'}/>
                    </div>

                    <TextBaseCush fontWeight='normal' style={{position:'relative',right:'7px',top:'1px'}}
                                  fontSize='16px'>.</TextBaseCush>
                </div>










                <NavButtonsContainer>
                    <LeftBlackButton goBack={true} navProps={location?.navProps} path={'/whereGroup'}/>
                    <ManyHomeButton path={'/home'}/>
                    <RightBlackButton navProps={props.navProps} path={'/whatDuration'}/>
                </NavButtonsContainer>
            </IphoneScreen>
        </MainContainer>
    )
}

export default WhatExchange;

