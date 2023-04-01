import React, { useState } from "react";
import { selectCurrentUser } from "../../features/auth/authSlice";
import { selectCurrentToken } from "../../features/auth/authSlice";
//import { selectCurrentAmount } from '../../features/userInfo/userInfoSlice';
//import { setInfo } from '../../features/userInfo/userInfoSlice'
import { setCredentials } from "../../features/auth/authSlice";
//import { useGetInfosMutation} from "../../features/userInfo/userInfoApiSlice"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useGetInfosMutation } from "../../features/userInfo/userInfoApiSlice";

function Modal({ open, text, onClose }) {
  //const [getInfos , {isSuccess}] = useGetInfosMutation()
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const handleInputValue = (e) => setInputValue(e.target.value);
  const handleInputValue1 = (e) => setInputValue1(e.target.value);
  const dispatch = useDispatch();
  let accessToken = useSelector(selectCurrentToken);
  let email = useSelector(selectCurrentUser);
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

      dispatch(setCredentials({ email, accessToken, firstname, lastname }));
         await getInfos({ firstName, lastName}).then(
        (data) => console.log(data)
      );
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
          onClick={handleSubmit}
          className="input_submit"
          value="Valider"
        ></input>
        <button onClick={onClose} className="input_submit">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Modal;
