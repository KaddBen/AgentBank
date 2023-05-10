import { apiSlice } from "../../app/api/apiSlice";

export const userInfoApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getInfos: builder.mutation({
      query: (credentials) => ({
        url: "/profile",
        method: "PUT",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useGetInfosMutation } = userInfoApiSlice;
