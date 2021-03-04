import React, {PureComponent} from 'react';
import DropdownAlert from 'react-native-dropdownalert';
import ShowMessageManager from './ShowMessageManager';
import {showAlert} from 'libraries/utils/utils';
import {StatusBar} from 'react-native';

export function showMessage(type, content, header) {
  const ref = ShowMessageManager.getDefault();

  if (ref) {
    ref.showMessage(type, content, header);
  }
}

class DropdownMessage extends PureComponent {
  render() {
    return (
      <DropdownAlert
        ref={(ref) => {
          this.dropDownAlertRef = ref;
        }}
        // inactiveStatusBarBackgroundColor={R.colors.blackColor}
        defaultContainer={{
          padding: 8,
          paddingTop: StatusBar.currentHeight,
          flexDirection: 'row',
        }}
        updateStatusBar={false}
        messageNumOfLines={120}
        closeInterval={2000}
        zIndex={100000}
        inactiveStatusBarStyle={'light-content'}
        // inactiveStatusBarBackgroundColor={R.colors.mainColor}
        // onTap={this.onTapAlert}
        // closeInterval={1000}
      />
    );
  }

  showMessage = (type, content, header) => {
    let headers = '';
    if (header) {
      headers = header;
    }
    this.dropDownAlertRef.alertWithType(type, headers, content);
  };

  onTapAlert = (data) => {
    showAlert(data.message);
  };
}

export default DropdownMessage;
