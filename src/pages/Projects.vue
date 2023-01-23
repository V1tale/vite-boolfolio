<script>
import axios from 'axios';
// import AppLoader from '../components/AppLoader.vue';
import AppCard from '../components/AppCard.vue';
import { store } from '../store';
export default {
    name: "Projects",
    components: { AppCard},
    data() {
        return {
            store,
            projects: [],
            currentPage: 1,
            lastPage: null,
            totalProjects: null,
            loading: false
        };
    },
    created() {
        this.getProjects(1);
    },
    methods: {
        getProjects(page) {
            console.log(page);
            const options = {
                params: {
                    page
                }
            }
            this.loading = true;
            axios.get(`${this.store.apiUrl}/api/projects`, options).then(resp => {
                console.log(resp.data.results);
                this.projects = resp.data.results.data;
                this.currentPage = resp.data.results.page;
                this.lastPage = resp.data.results.last_page;
                this.totalProjects = resp.data.results.total;
                this.loading = false;
            });
        }
    },
}
</script>
<template>
    <AppCard />
</template>