export default {
    template: `
    <section>
        <!-- we want to see the user name here -->
        <h3>Welcome home {{this.$route.params.user}}!</h3>
    </section>
    `
}