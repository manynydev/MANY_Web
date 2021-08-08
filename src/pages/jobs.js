import React, {useRef} from 'react';
import {
    MainContainer,
    IphoneScreen,
    TextBaseGothic,
    RightWhiteButton, NavigationButton, TextBaseManySans
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
            const jobText = <TextBaseManySans style={{
                color: 'white',
                fontWeight: 'regular',
                fontSize: '18px',
            }}>{job}
            </TextBaseManySans>
            jobSnapItems.push(
                <NavigationButton width={jobText.props.children.length} height={'24px'} displayComponent={jobText} path={'./whatExchange'} navProps={{...location?.navProps,job:job.toLowerCase()}}/>
            )
                // <SnapItem margin={{top:'5px'}} height="20px" width="150px" snapAlign="center">
                //     <NavigationButton displayComponent={jobText} path={'./whatExchange'} navProps={{...location?.navProps,job:job.toLowerCase()}}/>
                // </SnapItem>)
        })
        return jobSnapItems
    }

    const jobSnapItems = createJobSnapItems();
    return (
        <MainContainer>
            <IphoneScreen style={{backgroundColor: '#161616'}}>
                <div style={{position:'relative',left:15,top:10, display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                    {/*<SnapList width='200px' height='538px' direction="vertical" ref={snapList}>*/}
                        {jobSnapItems}
                    {/*</SnapList>*/}
                </div>
            </IphoneScreen>
        </MainContainer>
    )
}


export default Jobs;
