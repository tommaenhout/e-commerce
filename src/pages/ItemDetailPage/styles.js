import styled from 'styled-components';

export const ItemDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50%;
    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
    }
`;

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 100px;
    height: 100%;
    @media (max-width: 768px) {
        gap: 20px;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    width: 40%;
    height: 100%;
    @media (max-width: 768px) {
        justify-content: start;
        width: 100%;
        height: 100%;
    }
`;



