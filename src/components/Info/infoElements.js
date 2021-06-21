import styled from "styled-components";

export const Container = styled.section`
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 6.25rem ${(props) => props.theme.sidePadding};

  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const Numbers = styled.div`
  display: flex;
  align-items: center;
`;
export const NumbersList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NumbersIcon = styled.img`
  margin-right: 1.5rem;
`;
export const NumbersTitle = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 2.5rem;
  line-height: 150%;

  color: ${(props) => props.theme.white};
`;
export const NumbersDescription = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.75rem;

  letter-spacing: 0.01em;

  color: ${(props) => props.theme.gray};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  margin-top: 6.25rem;
`;
export const Image = styled.img`
  margin-right: 4.375rem;
`;
export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 2.5rem;
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
  margin-bottom: 2rem;
`;
export const Button = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 150%;

  text-align: center;

  color: ${(props) => props.theme.white};

  padding: 1rem 1.5rem;

  background-color: ${(props) => props.theme.blue};

  border-radius: 12.5rem;
`;
