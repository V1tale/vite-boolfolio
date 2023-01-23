<script>
export default {
    name: "AppCard",
    data() {
        return {
            maxContentLength: 100
        }
    },
    props: {
        project: Object
    },
    computed: {
        descriptionPreview() {
            if (this.project.content && this.project.content.length > this.maxContentLength) {
                return this.project.content.substring(0, this.maxContentLength) + "...";
            }
            return this.project.content;
        }
    }
}
</script>

<template>
    <div class="card mb-4">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <h6  class="text-primary" v-if="project.type">{{ project.type.name }}</h6>
            <h6 class="text-secondary" v-else>Nessuna Categoria</h6>
            <p class="card-text">{{ descriptionPreview }}</p>
            <router-link :to="{ name: 'ProjectPage', params: { slug: project.slug } }" class="btn btn-primary" href="">Dettagli</router-link>
        </div>
    </div>
</template>