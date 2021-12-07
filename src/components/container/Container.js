import PropTypes from 'prop-types';
import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  padding: 0 10px;
  margin: 0 auto;
`;

const Container = ({ children, className }) => {
  return className ? (
    <ContainerWrapper className={className}>{children}</ContainerWrapper>
  ) : (
    <ContainerWrapper>{children}</ContainerWrapper>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
