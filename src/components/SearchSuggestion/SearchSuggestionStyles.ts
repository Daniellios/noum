import styled from "styled-components";

export const SuggestionBoxWrapper = styled.div`
  position: absolute;
  width: 100%;
  padding: 0.5rem;
  z-index: 10;
  top: 3rem;
  left: 0;
  background-color: white;
  border: 1px solid black;
`;

export const SuggestionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  overflow-y: auto;
  gap: 10px;
  max-height: 150px;
  width: 100%;
`;

export const SuggestionBoxRow = styled.div`
  display: flex;
  padding-left: 1rem;
  height: 5rem;
  font-size: 1.5rem;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  &:hover {
    color: ${(props) => props.theme.colors.yellow};
    cursor: pointer;
    transition: all 0.2s linear;
  }
`;
