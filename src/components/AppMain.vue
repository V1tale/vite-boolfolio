<script>
import axios from 'axios';
import AppCard from './AppCard.vue';
import { store } from '../store';
export default {
    name: "AppMain",
    components: { AppCard},
    data() {
        return {
            store,
            posts: [],
            currentPage: 1,
            lastPage: null,
            totalProjects: null,
            loading: false
        };
    },
    created() {
        this.getPosts(1);
    },
    methods: {
        getPosts(page) {
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
                this.currentPage = resp.data.results.current_page;
                this.lastPage = resp.data.results.last_page;
                this.totalPosts = resp.data.results.total;
                this.loading = false;
            });
        }
    },
}
</script>

<template>
    <div class="container">
        <h2 class="text-center mb-3">Tutti i nostri post</h2>
        <AppLoader v-if="loading" />
        <div v-else class="row justify-content-center py-4">
            <div class="col-11 col-md-10 col-lg-8">
                <p class="text-end">Totale {{ totalProjects }} post trovati</p>
                <PostCard :post="project" v-for="project in projects" :key="project.id" />

                <!-- pages navigation -->
                <nav class="navigation d-flex justify-content-between">
                    <div>
                        page {{ currentPage }} in {{ lastPage }}
                    </div>
                    <div>
                        <a class="btn btn-success me-2" :class="currentPage === 1 ? 'disabled' : ''" href=""
                            @click.prevent="getProjects(currentPage - 1)">Back</a>
                        <a class="btn btn-success" :class="{ 'disabled': currentPage === lastPage }" href=""
                            @click.prevent="getProjects(currentPage + 1)">Next</a>
                    </div>

                </nav>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
</style>