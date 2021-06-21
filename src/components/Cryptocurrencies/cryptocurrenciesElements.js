import styled from "styled-components";

export const Container = styled.div`
  padding: 0 ${(props) => props.theme.sidePadding};
  padding-bottom: 6.25rem;
`;
export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 2.5rem;
  line-height: 150%;

  text-align: center;

  width: 46.3125rem;
  margin: auto;

  color: ${(props) => props.theme.backgroundColor};

  margin-bottom: 4rem;
`;

export const CardList = styled.ul`
  display: flex;
  justify-content: space-between;
  border-radius: 1rem;
`;
export const MainCard = styled.div`
  padding: 3rem 1.5rem;
  background-color: ${(props) => props.theme.darkBlue};

  display: flex;
  flex-direction: column;

  align-items: center;

  border-radius: 1rem;
`;
export const Card = styled.div`
  padding: 3rem 1.5rem;
  background-color: ${(props) => props.theme.white};

  display: flex;
  flex-direction: column;

  align-items: center;

  border-radius: 1rem;
`;
export const Icon = styled.img`
  margin-bottom: 3rem;
`;
export const MainCardTitle = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 150%;

  text-align: center;

  color: ${(props) => props.theme.white};

  margin-bottom: 1rem;
`;
export const CardTitle = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 150%;

  text-align: center;

  color: ${(props) => props.theme.backgroundColor};

  margin-bottom: 1rem;
`;
export const MainCardTitleSpecific = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 150%;

  text-align: center;

  color: ${(props) => props.theme.white};

  opacity: 0.7;
`;
export const CardTitleSpecific = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 150%;

  text-align: center;

  color: #bdbdbd;
`;
export const MainDescription = styled.p`
  width: 20.125rem;

  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.75rem;

  text-align: center;
  letter-spacing: 0.01em;

  color: ${(props) => props.theme.white};

  margin-bottom: 1.5625rem;
`;
export const Description = styled.p`
  width: 20.125rem;

  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.75rem;

  text-align: center;
  letter-spacing: 0.01em;

  color: ${(props) => props.theme.gray2};

  margin-bottom: 1.5625rem;
`;
export const MainButton = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 150%;

  text-align: center;

  color: ${(props) => props.theme.white};
  padding: 1.1563rem 1.5rem;
  padding-right: 1rem;

  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.blue};

  border-radius: 12.5rem;
`;
export const Button = styled.button`
  width: 4rem;
  height: 4rem;

  background-image: url(${(props) => props.src});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  background-color: transparent;
`;
export const ButtonIcon = styled.img`
  margin-left: 1.5rem;
`;
