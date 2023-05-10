import React, { useState, useEffect } from "react";
import { getName } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useGetInfosMutation } from "../../features/userInfo/userInfoApiSlice";
import { handleLastName } from "./modalFunction/handleLastName";
import { handleSubmit } from "./modalFunction/handleSubmit";
import './Modal.css';

function Modal({ open, text, onClose }) {
  
  const [inputName, setInputName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const handleFirstName = (e) => setInputName(e.target.value);
  const dispatch = useDispatch();
  const [getInfos, { isLoading }] = useGetInfosMutation();


    if (!open) return null;
  return (
    <div className="modal">
      <span>{text}</span>
      <div className="input_container">
        <input
          type={"text"}
          value={inputName}
          onChange={handleFirstName}
          className="input_text"
        ></input>
        <input
          type={"text"}
          value={inputLastName}
          onChange={(e) => handleLastName(
          e,
          onClose,
          setInputLastName
          )}
          className="input_text"
        ></input>
      </div>
      <div className="input_container">
        <input
          type={"submit"}
          onMouseDown={(e) => handleSubmit(
            e,
            inputLastName,
            inputName,
            dispatch,
            getName,
            getInfos
          )}
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
