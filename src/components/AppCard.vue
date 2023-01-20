<script>
export default {
    name: 'ProjectCard',
    data() {
        return {
            contentMaxLength: 200,
            baseUrl: "http://127.0.0.1:8000",
        }
    },
    props: {
        project: Object,
    },
    computed: {
        contentPreview() {
            if (this.project.content && this.project.content.length > this.contentMaxLength) {
                return this.project.content.substr(0, this.contentMaxLength) + '...';
            }
            return this.project.content;
        }
    },
    methods: {
        // truncateText(text) {
        //     if (text && text.length > this.contentMaxLength) {
        //         return text.substr(0, this.contentMaxLength) + '...';
        //     }
        //     return text;
        // }
    }
}
</script>

<template>
    <div class="card mb-3">
        <div class="card-body">
            <div class="row justify-content-between">
                <div class="col-4">
                    <img v-if="project.image" class="w-100" :src="`${baseUrl}/storage/${project.image}`" alt="">
                    <div v-else>
                        Nessuna immagine
                    </div>
                </div>
                <div class="col-7">
                    <h3 class="card-title">{{ project.title }}</h3>
                    <div class="d-flex justify-content-between">
                        <p>
                            <span class="text-primary" v-for="technology in project.technologies" :key="technology.id">#{{ technology.name }} </span>
                        </p>
                        <p class="text-end text-primary">{{ project.type ? project.type.name : 'Nessuna tipologia' }}
                        </p>
                    </div>
                    <p class="card-text">
                        {{ contentPreview }}
                    </p>
                    <a class="btn btn-dark" href="">Leggi</a>
                </div>
            </div>

        </div>
    </div>
</template>