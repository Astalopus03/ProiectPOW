import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';
import Dashboard from '../components/Dashboard.vue'; // Example

const routes = [
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/dashboard', component: Dashboard }, // Add other routes as needed
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
