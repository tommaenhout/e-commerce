import styled from "styled-components";


export const Container = styled.div`    
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    `

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #E0E0E0;
`

export const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width:50px;
    `   
export const PriceContainer = styled.div`
    display: flex;
    width: 100px;
    ` 

export const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-bottom: 10px;
  
    `