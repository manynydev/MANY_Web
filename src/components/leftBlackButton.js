import leftBlackArrow from "../assets/icons/left_black.png"
import NavigationButton from "./navigationButton";


const LeftBlackButton = (props) => {
    const leftArrowImage = <img style={{height:'20px',position:'absolute'}} alt='leftBlackArrow' src={leftBlackArrow}/>
    return(
        <NavigationButton goBack={props.goBack} path={props.path} navProps={props.navProps} displayComponent={leftArrowImage}/>
    )
}

export default LeftBlackButton;
