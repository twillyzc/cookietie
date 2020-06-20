import styled from 'styled-components';

export const Container = styled.aside`
  grid-area: sidebar;
  background-color: ${(props) => props.theme.colors.light};
`;

export const Wrapper = styled.div`
  position: sticky;
  top: 50px;
`;
