class ShowMessageManager {
  _showMessage = null;

  register(_ref) {
    if (!this._showMessage) {
      this._showMessage = _ref;
    }
  }

  unregister(_ref) {
    if (!!this._showMessage && this._showMessage._id === _ref._id) {
      this._showMessage = null;
    }
  }

  getDefault() {
    return this._showMessage;
  }
}

export default new ShowMessageManager();
