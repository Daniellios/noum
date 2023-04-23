import styled from "styled-components";

interface SelectOption {
  isDefaultValue: boolean;
}

export const SelectInput = styled.select<SelectOption>`
  appearance: none;
  background-color: transparent;
  border: none;
  outline: none;
  font-weight: 600;
  margin: 0;
  padding: 0 0.5rem;
  width: 150px;
  font-family: inherit;

  color: ${(props) =>
    props.isDefaultValue
      ? props.theme.colors.black
      : props.theme.colors.yellow};

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.yellow};
  }

  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
`;

export const SelectOption = styled.option`
  color: ${(props) => props.theme.colors.black};
`;
