import styled from 'styled-components'


const ButtonContainer = styled.div`
    background-color: ${props => props.theme === 'dark' ? 'white' : '#CC4629'};    
    box-sizing: border-box;
    color: ${props => props.theme === 'dark' ? '#0d172a' : 'white'};
    cursor: pointer;    
    font-family: "Basier circle",-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 0.3;
    transition: all .4s cubic-bezier(.4, 0, .2, 1);
    box-shadow: 0px 1px 2px rgba(166, 175, 195, 0.25);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    border: none;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: space-between;
    border-radius: 50%;
    padding-top: 12px;
    width: 80px;
    height: 80px;
    box-shadow: grey 0px 4px 24px;

    &:hover {
        background-color: ${props => props.theme === 'light' ? '#F6DDCC' : '#1e293b'};   
        color: ${props => props.theme === 'light' ? '#0d172a' : 'white'};
    }

    p {
        font-size: small;
    }

    @media all and (max-width: 768px) {
        font-size: 0.8em;
        width: 60px;
        height: 60px;

        p {
            font-size: x-small;
        }
    }
`

const s = {
    ButtonContainer
};


export default s;