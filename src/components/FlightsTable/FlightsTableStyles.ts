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
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
`;

export const FlightTime = styled.span`
  font-size: 1.2rem;
  font-weight: 800;
  margin-right: 4rem;
`;

export const FlightTerminal = styled.div`
  width: 40px;
  min-width: 40px;
`;

export const FlightNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 120px;
  gap: 1rem;
  width: 120px;
`;

export const FlightGate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 120px;
  width: 120px;
`;

export const FlightStatus = styled.p`
  font-weight: 600;
  text-align: center;
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
