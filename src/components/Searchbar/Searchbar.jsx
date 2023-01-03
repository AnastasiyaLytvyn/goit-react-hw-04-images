import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { BsSearch } from 'react-icons/bs';
import { Header, SearchForm, Button, Input } from './Searchbar.styled';

const initialValues = {
  search: '',
};

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <Header>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
