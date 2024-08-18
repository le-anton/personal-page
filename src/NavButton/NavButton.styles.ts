import styled from 'styled-components'

const ButtonWrapper = styled.div`

    .nav-button {
        background: whitesmoke;
        backface-visibility: hidden;
        border-radius: .375rem;
        border: 0;
        box-sizing: border-box;
        color: #212121;
        cursor: pointer;
        display: flex;
        align-items: center;
        font-family: Circular,Helvetica,sans-serif;
        font-size: 1.125rem;
        font-weight: 700;
        letter-spacing: -.01em;
        line-height: 1.3;
        padding: .875rem 1.125rem;
        text-align: left;
        text-decoration: none;
        transform: translateZ(0) scale(1);
        transition: transform .2s;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
    }

    .nav-button:not(:disabled):hover {
        transform: scale(1.2);
    }
    .active {
        outline: 0 solid transparent;
        border-color: blue;
        color: #FF5733;
    }
`


const s = {
    ButtonWrapper
};

export default s;

