import styled from 'styled-components'


const StyledProfile = styled.img`{
  object-fit: scale-down;
  width: 100%;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  -webkit-user-drag: none;
}`


const Profile = (props) => {
    return (
        <StyledProfile src={props.src}/>
    )
}


export default Profile