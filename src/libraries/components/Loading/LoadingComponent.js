import React, {PureComponent} from 'react';
import {View, StyleSheet} from 'react-native';
import Spinner from 'react-native-spinkit';
import R from 'res/R';
import PropTypes from 'prop-types';

class LoadingComponent extends PureComponent {
  static defaultProps = {
    spinnerSize: 35,
    // 'CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots',
    // 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle',
    // 'FadingCircleAlt', 'Arc', 'ArcAlt'
    spinnerType: 'Circle',
    spinnerColor: R.colors.blackColor,
  };

  static propTypes = {
    spinnerSize: PropTypes.number,
    spinnerType: PropTypes.string,
    spinnerColor: PropTypes.string,
  };

  render() {
    return (
      <View style={[styles.loadingContainer, this.props.loadingStyle]}>
        <Spinner
          isVisible
          size={this.props.spinnerSize}
          type={this.props.spinnerType}
          color={this.props.spinnerColor}
        />
      </View>
    );
  }
}

export default LoadingComponent;

const styles = StyleSheet.create({
  loadingContainer: {
    backgroundColor: 'rgba(0,0,0,0.25)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
