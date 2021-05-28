import styled from 'styled-components';

// USER PAGE STYLING //

const MainDiv = styled.div`
background-image: url('https://www.thespruce.com/thmb/2N2dQuQ3uO9udPWIwmowg_XJRJs=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/overhead-smiling-neighbors-around-potluck-table-sunny-park-576799253-59934633aad52b0011e7cfd5.jpg');
padding: 1% 0;
background-size:cover;
background-position:top;
background-attachment:fixed;
background-repeat: no-repeat;

`;

const HeaderDiv = styled.header`
background-color: #ffbf80;
`;

const LogoutButton = styled.button`
padding: 0.5em;
height: fit-content;
background: white;
color: black;
border-radius: 10px;
:hover{
    color: #ffbf80;
    border-color: #ffbf80;
}
`;

const UserImg = styled.img`
width: 20%;
`;

const UserDiv = styled.div`
background-color: #ffbf80;
margin: 5%;
border: 2px solid silver;
border-radius: 5px;
margin-left:16%;
width:68%;
`;

const UserText = styled.div`
padding-right: 40%;
background: white;
`;

const ButtonDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
background-color: #ffbf80;
align-items: center;
`;

const Button = styled.button`
padding: 5px;
border-radius: 5px;
background: white;
color: black;
text-decoration: none;
&:hover {
color: #ffbf80;
}
`;

const PotluckButton = styled.button`
padding: 5px;
margin-top: 2%;
border-radius: 5px;
height: fit-content;
background: white;
color: black;
text-decoration: none;
&:hover {
color: #ffbf80;
}
`;

const FormDiv = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
background: white;
`;


const EventsContainer = styled.div`
    display:flex;
    flex-direction:column;
    border: 2px solid silver;
    width:65%;
    margin:2rem auto;
    padding-left: 2rem;
    border-radius:10px;
    background-color: white;
`

const EventDiv = styled.div`
    display:flex;
    flex-direction:row;
    border: 2px solid silver;
    width:85%;
    margin:1rem;
    padding-left: 2rem;
    border-radius:10px;
    justify-content: space-between;

    button{
        margin:0.5rem;
    }
`
const MessageDiv = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
padding: 2%;
`;

const ContactDiv = styled.div`
display: flex;
flex-direction: row;
padding: 2%;
`;

const ContactLabel = styled.label`
padding-left: 2%;
`;

const MessageButtons = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
padding: 2%;
`;

const NavLink = styled(Button)`
padding: 5px;
border-radius: 5px;
background: white;
color: black;
text-decoration: none;
&:hover {
color: #ffbf80;
}
`;

export {EventsContainer, EventDiv, HeaderDiv, MainDiv, LogoutButton, Button, ButtonDiv, UserImg, UserDiv, UserText, FormDiv, MessageDiv, ContactDiv, ContactLabel, MessageButtons, NavLink, PotluckButton};

