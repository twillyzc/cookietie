import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Image = styled.img`
  width: 30px;
  height: auto;
  border-radius: 50%;
  border: 2px solid white;
`;

export const Container = styled.div`
  padding: 0.5rem;
`;

export const Wrapper = styled(Link)`
  background-color: ${(props) => props.theme.colors.white};
  height: 100%;
  display: flex;
  align-items: center;
`;
