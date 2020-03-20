import router from "./components/Router.js";

(() => {
    const myVM = new Vue({
        router,

        data: {
            message: "hello there"
        }
    }).$mount("#app");
})();