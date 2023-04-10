import React, { useState } from "react";
import { getName } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useGetInfosMutation } from "../../features/userInfo/userInfoApiSlice";

function Modal({ open, text, onClose, state }) {
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const handleInputValue = (e) => setInputValue(e.target.value);
  const handleInputValue1 = (e) => {
    let close = () => onClose;
    setInputValue1(e.target.value);
    close();
  };
  const dispatch = useDispatch();
  const [getInfos, { isLoading }] = useGetInfosMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let lastName = inputValue1;
      let firstName = inputValue;

      // eslint-disable-next-line no-use-before-define, no-unused-expressions

      let firstname = firstName;
      let lastname = lastName;

      // eslint-disable-next-line no-use-before-define, no-unused-expressions

      dispatch(getName({ firstname, lastname }));
      await getInfos({ firstName, lastName }).then((data) => console.log(data));
    } catch (err) {
      if (!err?.originalStatus) {
      }
    }
  };
  if (!open) return null;
  return (
    <div className="modal">
      <span>{text}</span>
      <div className="input_container">
        <input
          type={"text"}
          value={inputValue}
          onChange={handleInputValue}
          className="input_text"
        ></input>
        <input
          type={"text"}
          value={inputValue1}
          onChange={handleInputValue1}
          className="input_text"
        ></input>
      </div>
      <div className="input_container">
        <input
          type={"submit"}
          onMouseDown={handleSubmit}
          onMouseUp={onClose}
          className="input_submit"
          value="Validez"
        ></input>
        <button onClick={onClose} className="input_submit">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Modal;
