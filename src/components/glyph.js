import styled from 'styled-components'


const StyledGlyph = styled.img`{
  object-fit: scale-down;
  height: 40%;
  width: 50%;
  position: relative;
  top: ${props => props.top? props.top : ''};
   bottom: ${props => props.bottom? props.bottom : ''};
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  -webkit-user-drag: none;
}`


const Glyph = (props) => {
    return (
        <StyledGlyph top={props.top} bottom={props.bottom} src={props.src}/>
    )
}


export default Glyph