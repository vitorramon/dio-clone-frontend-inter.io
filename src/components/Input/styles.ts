import styled from "styled-components";

export const InputContainer = styled.div`
    max-width: 275px;
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #383450;

    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const IconContainer = styled.div`
    margin-right: 10px;
`

export const InputText = styled.input`
    background: transparent;
    color: #fff;
    border: 0;
    width: 100%;
    height: 30px;
`

export const ErrorText = styled.p`
    color: #ff0000;
    font-size: 12px;
    margin: 5px 0;
`