import styled from 'styled-components';

export const Wrapper = styled.header`
  height: 18rem;
  background: #fff;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 130rem;
  margin: 0 auto;
  position: relative;
`;

export const Nav = styled.nav`
  & > ul {
    list-style: none;
    display: flex;
    & > li {
      font-family: sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 13px;
      line-height: 16px;
      text-transform: uppercase;
      padding: 0 10px;

      & > a,
      & > a:visited,
      & > a:link {
        text-decoration: none;
        color: #000;
      }
    }
  }
`;

export const Logo = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #000;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  & > span {
    color: #ff5e5e;
  }
`;
