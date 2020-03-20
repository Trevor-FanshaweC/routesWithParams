import SplashComponent from "./TheSplashPage.js";
import HomeComponent from "./TheHomePage.js"

const routes = [
    { path: "/", name: "splash", component: SplashComponent },
    { path: "/home", name: "home", component: HomeComponent }
]

const router = new VueRouter({
    //mode: "history",
    routes
})

export default router