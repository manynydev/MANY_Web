import React, {useEffect} from 'react';
import {
    MainContainer,
    TextHeaderCush,
    IphoneScreen,
    TextBaseCush,
    LeftBlackButton, ManyHomeButton, RightBlackButton, NavButtonsContainer, NavigationButton, TextBaseManySans
} from "../components";
import {useHistory} from "react-router-dom";
import Input from '@material-ui/core/Input';
import {withStyles} from "@material-ui/core";

const StyledInput = withStyles({
    root: {
        fontFamily: 'ManySans, sans-serif',
        fontSize: '15px',
        fontWeight:'bold'
    },
    underline: {
        '&:before': {
            marginBottom: 7
        },
        '&:after': {
            borderBottomColor: 'black', marginBottom: 7
        }
    }
})(Input);


function WhatExchange(props) {
    let location = useHistory().location;
    console.log(location);
    const jobTitle = <TextBaseManySans color={'#919191'} underline={true}
                                       fontSize='15px'> {location?.navProps?.job ? location.navProps.job : 'select title'} </TextBaseManySans>
    const selectOffers = <TextBaseManySans color={'#919191'} underline={true} fontSize='15px'> select
        offers </TextBaseManySans>


    return (
        <MainContainer>
            <IphoneScreen>
                <div style={{margin: '15px'}}>
                    <TextHeaderCush>What is the exchange?</TextHeaderCush>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    top: '50px',
                    position: 'absolute',
                    flexWrap: "wrap",
                    left: '5px',
                    margin: '15px'
                }}>
                    <TextBaseCush fontWeight='normal' style={{position: 'relative'}} fontSize='16px'> The group needs
                        to
                        engage
                    </TextBaseCush>
                    <div style={{position: 'relative', right: '7px', bottom: '5px'}}>
                        <NavigationButton width={jobTitle.props.children.length} navProps={location?.navProps}
                                          displayComponent={jobTitle} path={'/jobs'}
                                          height={'16px'}/>
                    </div>
                    <TextBaseCush fontWeight='normal' style={{position: 'relative', bottom: '1px', right: '10px'}}
                                  fontSize='16px'> to </TextBaseCush>

                    <div style={{position: 'relative', right: '0px', bottom: '6px'}}>
                        <StyledInput style={{width:150}} placeholder={'describe activities'} multiline={true}/>
                    </div>
                    <TextBaseCush fontWeight='normal' style={{position: 'relative', bottom: '-1px', right: '2px'}}
                                  fontSize='16px'>.</TextBaseCush>
                    <TextBaseCush fontWeight='normal' style={{position: 'relative', bottom: '5px'}}
                                  fontSize='16px'>The group offers</TextBaseCush>
                    <div style={{position: 'relative', bottom: '8px', right: '5px'}}>
                        <NavigationButton width={selectOffers.props.children.length} navProps={location?.navProps}
                                          displayComponent={selectOffers} path={'/offers'}
                                          height={'16px'}/>
                    </div>

                    <TextBaseCush fontWeight='normal' style={{position: 'relative', right: '12px', bottom: '3px'}}
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

