import React, {PureComponent} from 'react';
import {Modal, StyleSheet} from 'react-native';

import LoadingManager from './LoadingManager';
import LoadingComponent from './LoadingComponent';

const TIME_OUT = 10 * 1000;

export function showLoading() {
  const ref = LoadingManager.getDefault();

  if (ref) {
    ref.showLoading();
  }
}

export function hideLoading() {
  const ref = LoadingManager.getDefault();

  if (ref) {
    ref.hideLoading();
  }
}

class LoadingModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  componentWillUnmount() {
    if (this.loadingTimeout) {
      clearTimeout(this.loadingTimeout);
    }
  }

  hideLoading = () => {
    if (this.loadingTimeout) {
      clearTimeout(this.loadingTimeout);
    }
    this.setState({isVisible: false});
  };

  showLoading = () => {
    this.loadingTimeout = setTimeout(() => {
      this.setState({isVisible: false});
    }, TIME_OUT);
    this.setState({isVisible: true});
  };

  render() {
    return (
      <Modal
        transparent
        animationType="fade"
        style={styles.styleModal}
        visible={this.state.isVisible}
        onRequestClose={() => {
          console.log('close modal');
        }}>
        <LoadingComponent />
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  styleModal: {position: 'absolute'},
});
export default LoadingModal;
