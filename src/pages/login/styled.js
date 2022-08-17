import styled from "styled-components";

export const ScreenContainer= styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    align-items: center;
    background-color: white;
    height: 100vh;

`
export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 360px ;
    /* margin: 5px; */
`
export const NewContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
`
export const ButtonNew = styled.button`
    background-color: transparent;
    border: none;
    cursor:pointer;

    &:hover {

    }
`
export const LoginButton = styled.button`
 background-color: #5CB646;
 border: none;
 height: 42px;
 cursor:pointer;
`
export const ImgLogin = styled.img`
  width: 150px

`