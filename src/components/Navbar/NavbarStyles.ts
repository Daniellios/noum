import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface LinkProps {
  is_active: string;
}

export const LinkWrapper = styled.nav`
  display: flex;
  gap: 4rem;
`;

export const PageLink = styled(NavLink)<LinkProps>`
  font-weight: 700;
  cursor: pointer;
  color: ${(props) =>
    props.is_active === "true"
      ? props.theme.colors.yellow
      : props.theme.colors.black};
  white-space: nowrap;
  font-size: calc(32 * 1px + (160 - 32) * (100vw - 320 * 1px) / (1920 - 320));
  transition: all 0.1s ease-in-out;

  text-decoration: none;
  &:hover {
    color: #ffac02 !important ;
  }
`;
