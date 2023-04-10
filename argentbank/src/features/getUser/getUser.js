import { apiSlice } from "../../app/api/apiSlice";

export const getUserApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.mutation({
      query: (credentials) => ({
        url: "/profile",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const {
  useGetUserMutation
} = getUserApiSlice
