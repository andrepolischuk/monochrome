'use strict';
const namespace = safari.extension.baseURI;

function message(event) {
  if (event.name === namespace) {
    document.documentElement.classList.toggle('monochrome', event.message === '1');
  }
}

function keypress(event) {
  if (event.metaKey && event.shiftKey && event.key === 'm') {
    safari.self.tab.dispatchMessage(namespace, 'hotkey');
  }
}

safari.self.addEventListener('message', message, true);
window.addEventListener('keypress', keypress, true);
