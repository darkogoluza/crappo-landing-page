import styled from "styled-components";

export const Contianer = styled.section`
  padding: 5.5rem ${(props) => props.theme.sidePadding};

  background-image: url(${(props) => props.src}),
    linear-gradient(180deg, #2b076e 0%, #0d0d2b 100%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
export const Content = styled.div`
  padding: 3rem;

  background-color: ${(props) => props.theme.blue};

  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 1rem;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 150%;

  color: ${(props) => props.theme.white};

  margin-bottom: 1rem;
`;
export const Description = styled.p`
  width: 21.75rem;

  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.75rem;

  letter-spacing: 0.01em;

  color: ${(props) => props.theme.white};
`;
export const Input = styled.input`
  width: 23.375rem;

  background-color: transparent;

  border-bottom: 1px solid rgba(255, 255, 255, 0.4);

  padding-bottom: 0.5rem;
  margin-right: 2.5rem;

  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.75rem;

  letter-spacing: 0.01em;

  color: ${(props) => props.theme.white};
`;
export const Button = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 150%;

  text-align: center;

  color: ${(props) => props.theme.black};

  padding: 0.875rem 2rem;

  background-color: ${(props) => props.theme.white};
  border-radius: 12.5rem;
`;
export const Wrapper = styled.div``;
