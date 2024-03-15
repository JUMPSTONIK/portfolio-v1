import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'; // Import the router instance

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const Vuetify = createVuetify({
  components,
  directives,
})

const clickOutside = {
  beforeMount: (el: { clickOutsideEvent: { (event: { target: any; }): void; (this: Document, ev: MouseEvent): any; }; contains: (arg0: any) => any; }, binding: { value: () => void; }) => {
    el.clickOutsideEvent = (event: { target: any; }) => {
      // here I check that click was outside the el and his children
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        binding.value();
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted: (el: { clickOutsideEvent: (this: Document, ev: MouseEvent) => any; }) => {
    document.removeEventListener("click", el.clickOutsideEvent);
  },
};
const app = createApp(App).directive("click-outside", clickOutside)


app.use(router); // Install the router instance
app.use(Vuetify); // Install Vuetify without theme
app.mount('#app');  // Mount the application at #
