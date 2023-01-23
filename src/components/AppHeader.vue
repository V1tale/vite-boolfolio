<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            navigation: [
                {
                    label: 'Home',
                    routeName: 'home'
                },
                {
                    label: 'About us',
                    routeName: 'about'
                },
                {
                    label: 'Projects',
                    routeName: 'projects'
                },
            ]
        }
    }
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid"> 
                <div class="left">

                    <a class="navbar-brand text-primary" href="#">BOOLFOLIO</a>
                    <a class="text-secondary" href="http://127.0.0.1:8000/admin">Amministrazione</a>
                </div>
                <div class="right">

                    <ul class="navbar-nav">
                        <li class="nav-item" v-for="(navItem, index) in navigation" :key="index">
                            <router-link :to="{ name: navItem.routeName }" class="nav-link" aria-current="page">{{navItem.label}}</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="http://127.0.0.1:8000/admin">Login</a>
                        </li>
                    </ul>
                    <div>
                </div>           
            </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>

        </nav>
    </header>
</template>