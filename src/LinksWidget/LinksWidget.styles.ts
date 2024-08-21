import styled from 'styled-components'


const WidgetWrapper = styled.div`
    position: absolute;
    bottom: 3%;
    right: 2%;
    display: flex;
    flex-flow: row nowrap;
    gap: 1.7vw;

    @media all and (max-width: 768px) {
        gap: 3vw;
    }
`

const s = {
    WidgetWrapper
};


export default s;