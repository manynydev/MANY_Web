import styled from 'styled-components'


const StyledLocation = styled.img`{
  object-fit: scale-down;
  width: 120px;
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

const Location = (props) => {
    return (
        <StyledLocation top={props.top} bottom={props.bottom} left={props.left} right={props.right}  src={props.src}/>
    )
}

export default Location
