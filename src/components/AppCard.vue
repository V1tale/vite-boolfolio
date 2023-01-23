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
        <div class="card-body" style="height:350px">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ descriptionPreview }}</p>
            <a href="#" class="btn btn-primary">Dettagli</a>
        </div>
    </div>
</template>