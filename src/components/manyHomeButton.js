import NavigationButton from "./navigationButton";
import SmallManyLogo from "../assets/many/MANY_Small.png";

const ManyHomeButton = (props) => {
    const smallManyLogo = <img draggable='false' style={{height: '22px',position:'absolute',imageRendering:'-webkit-optimize-contrast'}} alt='manyHomeButton' src={SmallManyLogo}/>
    return(
        <NavigationButton path={props.path} displayComponent={smallManyLogo}/>
    )
}

export default ManyHomeButton;