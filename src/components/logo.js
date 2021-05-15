import styled from 'styled-components'


const StyledLogo = styled.img`{
  object-fit: scale-down;
  height: 20%;
  width: 65px;
  position: relative;
  top: ${props => props.top ? props.top : 'auto'};
  bottom: ${props => props.bottom ? props.bottom : 'auto'};
  left: ${props => props.left ? props.left : 'auto'};
  right: ${props => props.right ? props.right : 'auto'};
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  -webkit-user-drag: none;
}`

const Logo = (props) => {
    return (
        <StyledLogo top={props.top} bottom={props.bottom} left={props.left} right={props.right}  src={props.src}/>
    )
}

export default Logo
