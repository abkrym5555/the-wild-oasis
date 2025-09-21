import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi";
import Logout from "../features/authentication/Logout";
import { useNavigate } from "react-router-dom";

const StyledHeaderList = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyledHeaderList>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>

      <li>
        <Logout />
      </li>
    </StyledHeaderList>
  );
}

export default HeaderMenu;
