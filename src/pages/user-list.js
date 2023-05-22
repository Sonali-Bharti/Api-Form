import { useEffect } from "react";
import { connect } from 'react-redux';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, retrieveUsers } from "../actions/users";

 function UserList(props) {
  const dispatch = useDispatch();
  const users = props.users
 
  useEffect(() => {
    props.retrieveUsers()
 }, [])
 
  const handleRemoveUser = (userId) => {
     dispatch(deleteUser(userId));
  };

 
  return (
    <>
      {users && users.map((user) => (
        <div className="new" key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>

          <Link className="btn" to="/">
            Create
          </Link>

          <Link className="btn" to={`/users/${user.id}/edit`}>
            Edit
          </Link>

          <button className="btn" onClick={() => handleRemoveUser(user.id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

const mapStateToProps = function(state) {
  return {
    users: state.userReducer,
  }
}

export default connect(mapStateToProps,{
  retrieveUsers
})(UserList);
