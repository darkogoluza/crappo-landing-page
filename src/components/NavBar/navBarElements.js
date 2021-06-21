import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 ${(props) => props.theme.sidePadding};

  padding-top: 3.75rem;
`;
export const Logo = styled.img`
  margin-right: auto;
`;
export const NavLink = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.75rem;
  letter-spacing: 0.01em;

  color: ${(props) => props.theme.white};

  text-decoration: none;
`;
export const NavList = styled.ul`
  display: flex;
  align-items: center;

  & > * {
    margin-right: 2rem;
  }
  & > *:last-child {
    margin-right: 0rem;
  }

  margin-right: 3.5rem;
`;
export const Login = styled.button`
  background-color: transparent;

  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 150%;

  text-align: center;

  color: ${(props) => props.theme.white};
`;
export const Register = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 150%;

  text-align: center;

  color: ${(props) => props.theme.white};

  padding: 0.875rem 2rem;

  background-color: ${(props) => props.theme.blue};

  border-radius: 12.5rem;
`;
export const LineDivider = styled.div`
  height: 24px;
  width: 1px;

  background-color: #f2f2f2;
  opacity: 0.3;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-right: 1.5rem;
  }
  & > *:last-child {
    margin-right: 0rem;
  }
`;
