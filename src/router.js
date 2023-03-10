import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import Projects from './pages/Projects.vue';
import aboutUs from './pages/AboutUs.vue';
import NotFound from './pages/NotFound.vue';
import ProjectPage from './pages/ProjectPage.vue';
const router = createRouter({
history: createWebHistory(),
routes: [
{
path: '/',
name: 'home',
component: AppHome
},
{
path: '/projects',
name: 'projects',
component: Projects
},
{
  path: "/projects/:slug",
  name: "ProjectPage",
  component: ProjectPage,
},
{
 path: '/about',
name: 'about',
component: aboutUs
},
{
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },
]
});
export { router };