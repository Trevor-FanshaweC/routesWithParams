import router from "./components/Router.js";

(() => {
    const myVM = new Vue({
        router,

        data: {
            username: "test user",

            user: {
                username: "test user"
            }
        }
    }).$mount("#app");
})();