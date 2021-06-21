import styled from "styled-components";

export const Container = styled.div`
  padding: 0 ${(props) => props.theme.sidePadding};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 150%;

  color: ${(props) => props.theme.white};

  margin-bottom: 1.5rem;
`;
export const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.75rem;

  letter-spacing: 0.01em;

  color: ${(props) => props.theme.gray};

  width: 28.125rem;

  margin-bottom: 2rem;
`;
export const Button = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 150%;

  text-align: center;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.blue};

  padding: 1rem 2rem;
  border-radius: 12.5rem;
`;
export const Image = styled.img``;
