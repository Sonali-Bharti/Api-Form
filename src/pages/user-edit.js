import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../actions/users";
import UserForm from "../components/user-form";

export default function UserEdit() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) =>
    state.userReducer.find((x) => String(x.id) === userId)
  );

  const onSubmit = function (users) {
    dispatch(updateUser(user.id,users));
    navigate("/users");
  };

  return <UserForm onSubmit={onSubmit} user={user} />;
}
