import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css'

function onFetchError() {
  error({
    text: 'Please check your request and try again!',
  });
}

export { onFetchError };