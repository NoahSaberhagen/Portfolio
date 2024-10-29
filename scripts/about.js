const include = document.querySelector('sl-include');
  
include.addEventListener('sl-load', event => {
  if (event.eventPhase === Event.AT_TARGET) {
    const container = document.querySelector('#cc-details-group');

  container.addEventListener('sl-show', event => {
    console.log(event.target.localName)
    if (event.target.localName === 'sl-details') {
      [...container.querySelectorAll('sl-details')].map(details => (details.open = event.target === details));
    }
  });
  }
});

include.addEventListener('sl-error', event => {
  if (event.eventPhase === Event.AT_TARGET) {
    console.log('Error', event.detail.status);
  }
});