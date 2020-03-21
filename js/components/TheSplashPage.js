export default {
    name: "TheSplashPage",

    template: `
    <section>
        <h3>Welcome to my super awesome app!</h3>
        <button @click="navtohome">Home Page</button>
    </section>
    `,

    methods: {
        navtohome() {
            this.$router.push({ name: "home", params: { user: this.$parent.user } })
        }
    }
}