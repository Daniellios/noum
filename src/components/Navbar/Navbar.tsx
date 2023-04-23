import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { changeBoardType } from "../../redux/slices/flightsSlice";
import { Direction } from "types/data";
import { LinkWrapper, PageLink } from "./NavbarStyles";
import { useEffect } from "react";

const Navbar = () => {
  const location = useLocation();

  const direction: Direction =
    location.pathname === "/departure" ? "departure" : "arrival";

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeBoardType(direction));
  }, [direction]);

  return (
    <LinkWrapper>
      <PageLink
        is_active={(location.pathname === "/departure").toString()}
        to="/departure"
      >
        Вылет
      </PageLink>
      <PageLink
        is_active={(location.pathname === "/arrival").toString()}
        to="/arrival"
      >
        Прилет
      </PageLink>
    </LinkWrapper>
  );
};

export default Navbar;
