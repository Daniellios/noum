import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 2px solid black;
  margin-bottom: 2rem;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

export const InputFilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  height: 2rem;

  &:hover {
    color: ${(props) => props.theme.colors.yellow};
  }
`;

export const InputFilter = styled.input`
  border: none;
  outline: none;
  min-width: 372px;
  font-size: 1rem;
  color: black;
  height: 100%;

  &::placeholder {
    color: black;
  }

  &:hover {
    &::placeholder {
      color: ${(props) => props.theme.colors.yellow};
    }
  }
`;
