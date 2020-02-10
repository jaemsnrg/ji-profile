import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDummyData } from './actions';


class E extends Component {
  componentDidMount() {
    const { getDummyData: getDummyDataAlt } = this.props;
    getDummyDataAlt();
  }

  render() {
    return (
      <div>Hello from Publisher Portal</div>
    );
  }
}
const mapStateToProps = state => ({
  info: state.info,
});
const mapDispatchToProps = dispatch => ({
  getDummyData: () => { dispatch(getDummyData()); },
});
E.defaultProps = {
  getDummyData: null,
};
E.propTypes = {
  getDummyData: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(E);
