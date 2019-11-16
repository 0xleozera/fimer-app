import PropTypes from 'prop-types';

const If = ({ test, children }) => (test ? children : null);

If.propTypes = {
  children: PropTypes.node,
  test: PropTypes.bool,
};

If.defaultProps = {
  test: false,
};

export default If;
