import Vue from "vue";
import Router from "vue-router";

import App from "../App";
import About from "@/views/About";
import Code from "@/views/Code";
import Contact from "@/views/Contact";
import Home from "@/views/Home";
import Profiles from "@/views/Profiles";
import Resume from "@/views/Resume";
import Sites from "@/views/Sites";
import Thoughts from "@/views/Thoughts";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/About",
      component: About
    },
    {
      path: "/Code",
      component: Code
    },
    {
      path: "/Contact",
      component: Contact
    },
    {
      path: "/Home",
      component: Home
    },
    {
      path: "/Profiles",
      component: Profiles
    },
    {
      path: "/Resume",
      component: Resume
    },
    {
      path: "/Sites",
      component: Sites
    },
    {
      path: "/Thoughts",
      component: Thoughts
    }
  ]
});
