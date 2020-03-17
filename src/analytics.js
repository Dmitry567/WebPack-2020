import * as $ from 'jquery';

function createAnalytics() {
  let counter = 0;
  let destroyed = false;

  const listener = () => counter++;

  document.addEventListener("click", listener);

  return {
    destroy() {
      document.removeEventListener("click", listener);
      destroyed = true;
    },

    getClicks() {
      if (destroyed) {
        return "Analytics is destroyed. Total clicks = ${counter}";
      }
      return counter;
    }
  };
}

window.analytics = createAnalytics();
// Global variable Window in this case
