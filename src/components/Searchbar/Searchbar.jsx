import React from 'react';
import { Formik } from 'formik';
import { BsSearch } from 'react-icons/bs';
import { Header, SearchForm, Button, Input } from './Searchbar.styled';

const initialValues = {
  search: '',
};

export const Searchbar = ({ onSubmit }) => {
  const handeSubmit = (values, { resetForm }) => {
    console.log(values);
    onSubmit(values, resetForm);
  };

  return (
    <Header>
      <Formik initialValues={initialValues} onSubmit={handeSubmit}>
        <SearchForm>
          <Button type="submit">
            <BsSearch size="24px" />
          </Button>
          <Input
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </Header>
  );
};
