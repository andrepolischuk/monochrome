'use strict';
const namespace = safari.extension.baseURI;

function toggle() {
  safari.extension.settings.enabled = safari.extension.settings.enabled === '1' ? '0' : '1';
}

function message(event) {
  if (event.name === namespace && event.message === 'hotkey') {
    toggle();
  }
}

function command(event) {
  if (event.command === 'makeMonochrome') {
    toggle();
  }
}

function passSettings(event) {
  const activeTab = event.target instanceof SafariBrowserTab ?
    event.target :
    event.target.activeTab;

  activeTab.page.dispatchMessage(
    namespace,
    safari.extension.settings.enabled
  );
}

function changeSettings(event) {
  if (event.key === 'enabled') {
    safari.application.activeBrowserWindow.activeTab.page.dispatchMessage(
      namespace,
      event.newValue
    );
  }
}

safari.application.addEventListener('message', message, true);
safari.application.addEventListener('command', command, true);
safari.application.addEventListener('activate', passSettings, true);
safari.application.addEventListener('navigate', passSettings, true);
safari.extension.settings.addEventListener('change', changeSettings, true);
