export default {
    name: "TheUserHomePage",
    props: ["user"],
    template: `
    <section>
        <!-- we want to see the user name here -->
        <h3>Welcome home {{user.username}}!</h3>
    </section>
    `
}