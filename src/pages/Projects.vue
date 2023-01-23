<script>
import axios from 'axios';
// import AppLoader from '../components/AppLoader.vue';
import AppCard from '../components/AppCard.vue';
import AppLoader from '../components/AppLoader.vue';
import { store } from '../store';
export default {
    name: "Projects",
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
    components: { AppCard, AppLoader},
    created() {
        this.getProjects(1);
    },
    methods: {
        getProjects() {
            this.loading = true;
            axios.get(`${this.store.apiUrl}/api/projects`).then(resp => {
                this.projects = resp.data.results;
                this.loading = false; 
            });
        },
    },
}
</script>
<template>
    <div class="container">
        <h2 class="text-center mb-3">I nostri progetti</h2>
        <AppLoader v-if="loading" />
        <div v-else class="row">
            <p class="text-end"> {{ projects.length }} progetti trovati</p>
            <div class="col-3" v-for="project in projects" :key="project.id">
                <AppCard :project="project" />
            </div>
        </div>
        <!-- pages navigation -->
        <!-- <nav class="navigation d-flex justify-content-between">
            <div>
                page {{ currentPage }} in {{ lastPage }}
            </div>
            <div>
                <a class="btn btn-success me-2" :class="currentPage === 1 ? 'disabled' : ''" href="" @click.prevent="getProjects(currentPage - 1)">Back</a>
                    <a class="btn btn-success" :class="{ 'disabled': currentPage === lastPage }" href="" @click.prevent="getProjects(currentPage + 1)">Next</a>
            </div>
                        
        </nav> -->
    </div>
</template>

<style lang="scss">
</style>