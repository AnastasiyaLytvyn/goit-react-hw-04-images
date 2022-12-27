import React from 'react';
import { Formik } from 'formik';
import { Header, SearchForm, Button, Input, Label } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handeSubmit = (values, { resetForm }) => {
    onSubmit(values, resetForm);
  };

  return (
    <Header>
      <Formik initialValues={{ search: '' }} onSubmit={handeSubmit}>
        <SearchForm>
          <Button type="submit">
            <Label>Search</Label>
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
