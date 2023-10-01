import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { Test } from './Card.styles';

class Card extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Card will mount');
  }

  componentDidMount = () => {
    console.log('Card mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Card will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Card will update', nextProps, nextState);
  }


  componentDidUpdate = () => {
    console.log('Card did update');
  }

  componentWillUnmount = () => {
    console.log('Card will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="CardWrapper">
        Test content
      </div>
    );
  }
}

Card.propTypes = {
  // bla: PropTypes.string,
};

Card.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Card);
