import rightWhiteArrow from "../assets/icons/right_white.png";
import NavigationButton from "./navigationButton";


const RightWhiteButton = (props) => {
    const RightArrowImage = <img style={{height:'20px',position:'absolute'}} alt='RightBlackArrow' src={rightWhiteArrow}/>
    return (
        <NavigationButton path={props.path} navProps={props.navProps} displayComponent={RightArrowImage}/>
    )
}

export default RightWhiteButton;