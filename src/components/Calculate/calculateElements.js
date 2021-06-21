import styled from "styled-components";

export const Container = styled.div`
  width: 58.875rem;
  margin: auto;

  position: relative;
  top: -155px;

  background-color: ${(props) => props.theme.white};

  border-radius: 1rem;

  box-shadow: 0px 1.25rem 12.5rem rgba(57, 23, 119, 0.05);
`;
export const Inputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 3rem;
`;
export const Input = styled.input`
  width: 25.1875rem;
  background-color: transparent;

  border-bottom: 1px solid ${(props) => props.theme.gray};

  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 150%;

  color: ${(props) => props.theme.black};

  padding-bottom: 0.5rem;

  mix-blend-mode: normal;

  &::placeholder {
    color: ${(props) => props.theme.black};
  }
  &:-ms-input-placeholder {
    color: ${(props) => props.theme.black};
  }

  &::-ms-input-placeholder {
    color: ${(props) => props.theme.black};
  }
`;
export const DropDown = styled.div`
  width: 12.5rem;

  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 150%;

  color: ${(props) => props.theme.black};

  mix-blend-mode: normal;

  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${(props) => props.theme.gray};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const DropDownIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;
export const Button = styled.button`
  padding: 1rem 2rem;

  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 150%;

  text-align: center;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.blue};

  border-radius: 12.5rem;
`;

export const Lower = styled.div`
  padding: 3rem;
`;
export const Estimated = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 150%;

  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: ${(props) => props.theme.blue};

  margin-bottom: 1rem;
`;
export const Value = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 150%;

  letter-spacing: 0.04em;

  color: ${(props) => props.theme.black};

  margin-bottom: 0.25rem;
`;
export const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.75rem;

  letter-spacing: 0.01em;

  color: ${(props) => props.theme.gray2};
`;

export const TitleHighLight = styled.span`
  color: ${(props) => props.theme.blue};
`;
