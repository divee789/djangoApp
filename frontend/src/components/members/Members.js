import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMembers, deleteMember } from "../../actions/members";

const Members = () => {
  const dispatch = useDispatch();
  const { members } = useSelector((state) => state.members);

  useEffect(() => {
    dispatch(getMembers());
  }, [dispatch]);

  return (
    <>
      <h1>Members</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.message}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    dispatch(deleteMember(member.id));
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Members;
