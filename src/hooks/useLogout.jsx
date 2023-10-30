import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import { logOut } from "../store/authSlice";
import {useNavigate} from "react-router-dom";
const useLogout = () => {
    // const history = useHistory();
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const handleLoguot = () =>
        dispatch(logOut())
            .unwrap()
            .then(() => {
                navigate('/')
                // history.push("/");
            })
            .catch(() => {
                window.location.reload();
            });
    return handleLoguot;
};

export default useLogout;
