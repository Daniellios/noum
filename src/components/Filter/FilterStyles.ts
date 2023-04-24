import styled from "styled-components";

interface VisibilityProps {
  isVisible: boolean;
}

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

export const SelectWrapper = styled.div<VisibilityProps>`
  display: flex;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: all 0.1s linear;
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

export const FilterButtonWrapper = styled.div<VisibilityProps>`
  display: flex;
  position: absolute;
  right: 1rem;
  top: 1rem;
  justify-content: center;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  z-index: ${(props) => (props.isVisible ? 10 : -10)};
  transition: all 0.3s linear;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
`;

export const FilterButton = styled.button`
  font-size: 1rem;
  border: 1px solid transparent;
  outline: none;
  background-color: transparent;
  font-weight: inherit;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.yellow};
  }

  transition: all 0.3s linear;
`;
