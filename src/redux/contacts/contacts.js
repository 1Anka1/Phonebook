import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: axiosBaseQuery({ baseUrl: 'https://phonebook-back-x4mw.onrender.com/' }),
  tagTypes: ['contacts'],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => ({ url: 'api/contacts', method: 'GET' }),
      providesTags: ['contacts'],
    }),
    addContact: builder.mutation({
      query: (value) => ({ url: 'api/contacts', method: 'POST', data: value }),
      invalidatesTags: ['contacts'],
    }),
    changeContact: builder.mutation({
      query: ({ id, name, email, number }) => ({
        url: `api/contacts/${id}`,
        method: 'PATCH',
        data: { name, email, number },
      }),
      invalidatesTags: ['contacts'],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `api/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
  // The same as above ----- >
  // baseQuery: fetchBaseQuery({
  //   baseUrl: 'https://phonebook-back-x4mw.onrender.com/',
  //   prepareHeaders: (headers, { getState }) => {
  //     const token = getState().auth.token;
  //     if (token) {
  //       headers.set('authorization', `Bearer ${token}`);
  //     } else {
  //       headers.delete('authorization');
  //     }
  //     return headers;
  //   },
  // }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useChangeContactMutation,
  useDeleteContactMutation,
} = contactsApi;
