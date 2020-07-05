import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMember, getMembers } from "../../actions/members";

const Form = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    name: "",
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addMember(formData));
    setFormData({
      email: "",
      message: "",
      name: "",
    });
  };

  return (
    <div className="card card-body mt-4 mb-4">
      <h2>Add Member</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={onChange}
            value={formData.name}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            onChange={onChange}
            value={formData.email}
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            className="form-control"
            type="text"
            name="message"
            onChange={onChange}
            value={formData.message}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
