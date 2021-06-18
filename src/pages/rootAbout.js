import React from "react";
import {MainContainer, RightBlackButton, TextBaseGothic,} from "../components/index";
import rightBlackArrow from "../assets/icons/right_black.png";
import NavigationButton from "../components/navigationButton";


function RootAbout() {
    const leftArrowImage = <img style={{height:35,position:'absolute'}} alt='rightBlackArrow' src={rightBlackArrow}/>
    const largeNavButton = <NavigationButton hoverBorder={true} width={'50px'} height={'40px'}displayComponent={leftArrowImage} path={'/rootHome'}/>

    return (
        <MainContainer color={'white'} flexDirection={'column'}>
            {/*TODO: fix width unit*/}
            <div style={{position:'relative',left:800,top:420}}>
            {largeNavButton}
            </div>
            <div style={{width:'90vh', height:'70vh',marginBottom:'100px'}}>
            <TextBaseGothic  fontSize='35px'> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et
                dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta
                nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis
                voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut
                rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae </TextBaseGothic>
            </div>
        </MainContainer>
    )
}

export default RootAbout;

