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

export const SelectNextTimeSpanButton = styled.button`
  text-align: center;
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid black;

  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    -webkit-box-shadow: 4px 4px 0px 0px rgba(255, 172, 2, 0.95);
    -moz-box-shadow: 4px 4px 0px 0px rgba(255, 172, 2, 0.95);
    box-shadow: 4px 4px 0px 0px rgba(255, 172, 2, 0.95);
  }
`;
