import { useEffect } from "react";

  
  export const handleSubmit = async (e, inputLastName, inputName, dispatch, getName, getInfos) => {
    e.preventDefault();
    try {
      let lastName = inputLastName;
      let firstName = inputName;

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