import { getName } from "../../../features/auth/authSlice";

  let firstname;
  let lastname;

   export let userProfile = async (getUser,dispatch) => {
      const data = await getUser().then((data) => data.data.body);
      firstname = data.firstName;
      lastname = data.lastName;
      dispatch(getName({ firstname, lastname }));
    };