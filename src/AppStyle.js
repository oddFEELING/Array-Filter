import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const TopBar = styled.div`
  width: 90%;
  height: 100vh;
  padding: 20px 5%;
  background-color: #fffe33;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
    text-decoration: underline;
    font-family: Cambria;
  }

  @media screen and (min-width: 950px) {
    flex-direction: row;
  }
`;

export const Btn = styled.button`
  width: 80%;
  height: 40px;
  cursor: pointer;
  background-color: #eeff;
  border: 0;
  transition: 300ms all ease-in-out;
  font-size: 1.2rem;
  margin: 5px;
  box-shadow: 3px 3px 9px 3px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #011f;
    color: #eeff;
    transform: scale(1.03);
  }
`;
