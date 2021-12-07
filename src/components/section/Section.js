import PropTypes from 'prop-types';
import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 0 20px;
  margin: 0;
`;

const Section = ({ children }) => {
  return <SectionWrapper>{children}</SectionWrapper>;
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
