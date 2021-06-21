import styled from "styled-components";

export const Container = styled.section`
  background-color: ${(props) => props.theme.backgroundColor};

  height: 100vh;
  width: 100%;

  position: relative;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;

  padding: 0.25rem;
  padding-right: 0.6875rem;

  background-color: ${(props) => props.theme.whiteTransparent};
  border-radius: 12.5rem;
  width: fit-content;

  margin-bottom: 1.75rem;
`;
export const InfoText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.75rem;

  letter-spacing: 0.01em;

  color: ${(props) => props.theme.white};
`;
export const InfoSave = styled.section`
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 150%;

  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: ${(props) => props.theme.backgroundColor};

  background-color: ${(props) => props.theme.white};

  padding: 0.25rem 1rem;

  border-radius: 12.5rem;

  margin-right: 2rem;
`;
export const Wrapper = styled.div`
  padding: 0 ${(props) => props.theme.sidePadding};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;

  margin-top: 6.25rem;
`;
export const Image = styled.img`
  position: absolute;

  top: 9.375rem;
  left: 12.5rem;

  pointer-events: none;
`;
export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 4rem;
  line-height: 4.75rem;

  margin-bottom: 1.75rem;

  color: ${(props) => props.theme.white};
`;
export const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.75rem;
  letter-spacing: 0.01em;

  color: ${(props) => props.theme.gray};

  margin-bottom: 2rem;

  width: 27.1875rem;
`;
export const Button = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 150%;

  text-align: center;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.blue};
  padding: 1.1563rem 1.5rem;

  border-radius: 12.5rem;

  display: flex;
  align-items: center;
`;
export const ButtonIcon = styled.img`
  margin-left: 1.5rem;
`;
