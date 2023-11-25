import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #111111;
    
    input {
        width: calc(100% - 24px);
        height: calc(75px - 4px);
        border: solid 2px #cccccc;

        font-size: 50px;
        line-height: 50px;
        font-family: 'Roboto';
        color: #cccccc;
        background-color: #111111;
        padding: 0 10px;
        text-align: right;
    }

    input:focus {
        outline: none;
    }
`