export default {
    props: {
        user: {
            username: String
        }
    },

    template: `
    <section>
        <h3>Welcome home {{ user.username }}!</h3>
    </section>
    `
}