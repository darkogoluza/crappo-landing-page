import styled from "styled-components";

export const Container = styled.section`
  background: linear-gradient(180deg, #f8f9fb 0%, #fafbff 100%);
`;
export const Upper = styled.div`
  padding: 6.25rem 21.875rem;
  padding-bottom: 13.75rem;

  background-color: ${(props) => props.theme.backgroundColor};
`;
export const UpperTitle = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 2.5rem;
  line-height: 150%;

  text-align: center;

  color: ${(props) => props.theme.white};

  margin-bottom: 1.5rem;
`;
export const UpperDescription = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 150%;

  text-align: center;

  color: ${(props) => props.theme.gray};

  width: 38.875rem;
  margin: auto;
`;
