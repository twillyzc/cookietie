import styled from 'styled-components';

export const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
  background-image: ${(props) => `url(${props.color})`};
`;

export const Image = styled.img`
  object-fit: cover;
  height: 25rem;
  width: 100%;
  filter: brightness(80%);
`;

export const Container = styled.div`
  padding: 0.5rem;
`;

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  overflow: hidden;
`;
