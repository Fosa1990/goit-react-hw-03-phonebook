import PropTypes from 'prop-types';
import styled from 'styled-components';

export const TitleH2 = styled.h2`
  color: var(--yellow);
  font-size: 32px;
  font-family: var(--big);
  text-align: center;
`;

const Title = ({ title }) => {
  return <TitleH2>{title}</TitleH2>;
};

Title.defaultProps = {
  title: 'Section title',
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
