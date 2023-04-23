import styled from "styled-components";

export const FlightTable = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlightRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  height: 100%;
  padding: 2rem 1rem;
  border: 1px solid transparent;
  border-bottom: 0.5px solid black;
  transition: all 0.2s linear;

  &:hover {
    border: 1px solid black;
    border-top: 1px solid transparent;
    cursor: pointer;
    -webkit-box-shadow: 4px 4px 0px 0px rgba(255, 172, 2, 0.95);
    -moz-box-shadow: 4px 4px 0px 0px rgba(255, 172, 2, 0.95);
    box-shadow: 4px 4px 0px 0px rgba(255, 172, 2, 0.95);
  }

  &:hover:first-child {
    border: 1px solid black;
  }
`;

export const FlightMainInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
`;

export const FlightSubInfo = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  font-weight: 600;
`;

export const FlightTime = styled.span`
  font-size: 1.2rem;
  font-weight: 800;
  margin-right: 4rem;
`;

export const FlightNumber = styled.div`
  display: flex;
  align-items: center;
  min-width: 100px;
  gap: 1rem;
`;

export const FlightStatus = styled.p`
  font-weight: 600;
  margin-right: 2rem;
`;

export const FlightCity = styled.p`
  font-size: 2em;
  font-weight: 800;
  transition: all 0.2s linear;
  ${FlightRow}:hover & {
    color: ${(props) => props.theme.colors.yellow};
  }
`;
