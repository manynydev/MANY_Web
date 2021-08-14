import React, {useState} from 'react';
import {
    MainContainer,
    IphoneScreen,
    NavigationButton, TextBaseManySans
} from "../components";
import {sharedStore} from "../components/hooks";
import {Button,ButtonBase} from "@material-ui/core";
import {useHistory} from 'react-router-dom';



const Jobs = () => {
    const history = useHistory();

    function createJobSnapItems() {
        let jobs = ['Students/Researchers', 'Teachers', 'Physicians', 'Nurses', 'Investors',
            'Cooperators', 'Chefs', 'Seamen', 'Designers/Artists', 'Agricultural trainees', 'Industrial trainees', 'Business trainees', 'Medical trainees', 'Other'];
        let jobSnapItems = [];
        jobs.forEach((job) => {
            const jobText = <TextBaseManySans style={{
                color: 'white',
                fontWeight: 'regular',
                fontSize: '18px',
            }}>{job}
            </TextBaseManySans>
            jobSnapItems.push(
                <Button style={{margin:2, width:`${job.length + 20}`, height:'24px'}} onClick={() =>
                {
                   sharedStore.dispatch({type:'title',value:job});
                    history.push({
                        pathname: '/whatExchange',
                    });
                }
                   }>
                    {jobText}
                </Button>
            )
        })
        return jobSnapItems
    }

    const jobSnapItems = createJobSnapItems();
    return (
        <MainContainer>
            <IphoneScreen style={{backgroundColor: '#161616'}}>
                <div style={{
                    position: 'relative',
                    left: 15,
                    top: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                }}>
                    {jobSnapItems}
                </div>
            </IphoneScreen>
        </MainContainer>
    )
}


export default Jobs;
