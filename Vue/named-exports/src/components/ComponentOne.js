export const MyButton = {
  template: `<button>Click here</button>`,
};

export const MyInput = {
  template: `<input type="text" />`,
};

// add this to the vite.config.js

// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       vue: "vue/dist/vue.esm-bundler.js",
//     },
//   },
// });

// this is not the way to export in VUe
// Vue supports SFC and one component per file
