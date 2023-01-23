<script>
import axios from 'axios';
import { store } from "../store";
export default {
    name: "ProjectPage",
    data() {
        return {
            store,
            project: {}
        }
    },
    created() {
        const slug = this.$route.params.slug;
        axios.get(`${this.store.apiUrl}/api/projects/${slug}`).then(resp => {
            if (resp.data.success) {
                this.project = resp.data.project;
            } else {
                this.$router.push({ name: "not-found" });
            }
        });
    },
    computed: {
        type() {
            return this.project.type ? this.project.type.name : 'Nessuna tipologia';
        }
    }
}
</script>

<template>
    <main>
        <div class="container">
            <h1 class="mt-3 text-center">{{ project.title }}</h1>
            <h5 class="text-center mt-2 text-uppercase text-primary">{{ category }}</h5>
            <img v-if="project.image" :src="`${store.apiUrl}/storage/images/${project.image}`" alt="">
            <h4>Nessuna immagine</h4>

            <p>{{ project.content }}</p>
        </div>
    </main>
</template>