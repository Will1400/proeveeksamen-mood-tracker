import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

import router from "./router";
import store from "./store";

import BaseEmoji from "./components/base/BaseEmoji.vue";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("base-emoji", BaseEmoji);

app.mount("#app");
