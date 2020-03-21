import router from "./components/Router.js";

(() => {
    const myVM = new Vue({
        router,

        data: {
            username: "test user",

            user: {
                username: "test user"
            }
        },

        methods: {
            navigateToHome() {
                this.$router.push({ name: "home", params: { user: this.user } })
            }

        }
    }).$mount("#app");
})();