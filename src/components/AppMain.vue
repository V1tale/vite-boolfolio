<script>
import axios from 'axios';
import AppCard from './AppCard.vue';
export default {
    name: "AppMain",
    components: { AppCard },
    data() {
        return {
            baseUrl: "http://127.0.0.1:8000",
            posts: [],
            loading: false
        };
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects() {
            this.loading = true;
            axios.get(`${this.baseUrl}/api/projects`).then(resp => {
                this.projects = resp.data.results;
                this.loading = false;
            });
        }
    },
}
</script>

<template>
    <main>
        <div class="container">
            <h2 class="text-center mb-3">La lista dei progetti</h2>
            <AppLoader v-if="loading" />
            <div v-else class="row justify-content-center">
                <div class="col-11 col-md-10 col-lg-8">
                    <AppCard :project="project" v-for="project in projects" :key="project.id" />
                </div>
            </div>
        </div>
    </main>
    </template>