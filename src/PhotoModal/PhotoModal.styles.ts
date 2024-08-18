import styled from 'styled-components'


const PhotoModalWrapper = styled.div`
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
    
    .modal {
        background: white;
        padding: 20px;
        border-radius: 4px;
        max-width: 500px;
        width: 100%;
        position: relative;
    }
    
    .modal-close {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
    }
    
    .modal-content {
        margin-top: 20px;
    }
`

export const s = {
    PhotoModalWrapper
}