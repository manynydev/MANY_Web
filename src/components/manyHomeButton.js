import NavigationButton from "./navigationButton";
import SmallManyLogo from "../assets/many/MANY_Small.png";

const ManyHomeButton = (props) => {
    const smallManyLogo = <img style={{height: '22px',position:'absolute'}} alt='manyHomeButton' src={SmallManyLogo}/>
    return(
        <NavigationButton path={props.path} displayComponent={smallManyLogo}/>
    )
}

export default ManyHomeButton;