import { useState } from "react";

const useFormInput = function (def = "") {
  const [value, setValue] = useState(def);

  return {
    value,
    onChange: function (e) {
      setValue(e.target.value);
    }
  };
};

export default function UserForm({ onSubmit, user }) {
  const nameInput = useFormInput(user?.name);
  const emailInput = useFormInput(user?.email);
  const phoneInput = useFormInput(user?.phone);

  const handleSubmit = function (e) {
    e.preventDefault();

    onSubmit({
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" {...nameInput} />
      </label>

      <label>
        Email:
        <input type="email" {...emailInput} />
      </label>

      <label>
        Phone:
        <input type="tel" {...phoneInput} />
      </label>

      <button type="submit">{user ? "Update" : "Submit"}</button>
    </form>
  );
}
