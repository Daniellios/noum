import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { changeBoardType } from "../../redux/slices/flightsSlice";
import { LinkWrapper, PageLink } from "./NavbarStyles";
import { useEffect } from "react";
import { Direction } from "../../types/data";

const Navbar: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const direction: Direction =
    location.pathname === "/departure" ? "departure" : "arrival";

  useEffect(() => {
    dispatch(changeBoardType(direction));
  }, [direction, dispatch]);

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
