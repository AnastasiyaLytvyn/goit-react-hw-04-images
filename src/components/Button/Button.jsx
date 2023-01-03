import { LoadMoreButton } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <LoadMoreButton onClick={onClick} type="button">
      Load more
    </LoadMoreButton>
  );
};
