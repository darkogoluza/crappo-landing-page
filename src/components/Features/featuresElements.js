import styled from "styled-components";

export const Container = styled.section`
  padding: 6.25rem 0;

  background-color: ${(props) => props.theme.darkBlue};

  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
export const Title = styled.h1`
  width: 47.375rem;
  margin: auto;

  font-style: normal;
  font-weight: bold;
  font-size: 2.5rem;
  line-height: 150%;

  text-align: center;

  color: ${(props) => props.theme.white};
`;
export const CardsList = styled.div`
  margin-top: 6.25rem;

  & > * {
    margin-bottom: 7.5rem;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`;
