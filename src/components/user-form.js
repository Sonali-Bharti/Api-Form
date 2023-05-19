import { useState } from "react";

const useForm = function (def = "") {
  const [value, setValue] = useState(def);

  return {
    value,
    onChange: function (e) {
      setValue(e.target.value);
    }
  };
};

export default function UserForm({ onSubmit, user }) {
  const name = useForm(user?.name);
  const email = useForm(user?.email);
  const phone = useForm(user?.phone);

  const handleSubmit = function (e) {
    e.preventDefault();

    onSubmit({
      name: name.value,
      email: email.value,
      phone: phone.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" {...name} />
      </label>

      <label>
        Email:
        <input type="email" {...email} />
      </label>

      <label>
        Phone:
        <input type="tel" {...phone} />
      </label>

      <button type="submit">{user ? "Update" : "Submit"}</button>
    </form>
  );
}
