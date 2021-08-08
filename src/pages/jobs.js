import React, {useRef} from 'react';
import {
    MainContainer,
    IphoneScreen,
    TextBaseGothic,
    RightWhiteButton, NavigationButton
} from "../components";
import {SnapList, SnapItem, useDragToScroll} from "react-snaplist-carousel";
import {useHistory} from "react-router-dom";


const Jobs = (props) => {
    const location = useHistory().location;
    const snapList = useRef(null);
    useDragToScroll({ref: snapList, disable: false});

    function createJobSnapItems() {
        let jobs = ['Students/Researchers', 'Teachers', 'Physicians', 'Nurses', 'Investors',
            'Cooperators', 'Chefs', 'Seamen', 'Designers/Artists', 'Agricultural trainees', 'Industrial trainees', 'Business trainees', 'Medical trainees', 'Other'];
        let jobSnapItems = [];
        jobs.forEach((job) => {
            const jobText = <TextBaseGothic style={{
                color: 'white',
                fontWeight: 'regular',
                fontSize: '72px',
            }}>{job}
            </TextBaseGothic>
            jobSnapItems.push(
                <SnapItem margin={{top: '10px', bottom: '10px'}} height="80px" snapAlign="center">
                    <NavigationButton displayComponent={jobText} path={'./whatExchange'} navProps={{...location?.navProps,job:job.toLowerCase()}}/>
                </SnapItem>)
        })
        return jobSnapItems
    }

    const jobSnapItems = createJobSnapItems();
    return (
        <MainContainer>
            <IphoneScreen style={{backgroundColor: '#161616'}}>
                <div style={{marginLeft: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <SnapList width='70px' height='538px' direction="vertical" ref={snapList}>
                        {jobSnapItems}
                    </SnapList>
                </div>
            </IphoneScreen>
        </MainContainer>
    )
}


export default Jobs;
