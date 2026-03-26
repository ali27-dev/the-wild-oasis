import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/Button";
import { useLogout } from "./useLogout";
import Spinner from "../../ui/SpinnerMini";

function LogOut() {
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <Spinner />}
    </ButtonIcon>
  );
}

export default LogOut;
