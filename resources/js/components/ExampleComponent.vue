<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card" v-for="project in projects">
                    <div class="card-header">{{ project.name }}</div>

                    <div class="card-body">
                        {{ project.description }}
                    </div>
                    <!--<div class="card-header"><slot name="title"></slot></div>-->

                    <!--<div class="card-body">-->
                        <!--<slot name="description"></slot>-->
                    <!--</div>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // data() {
        //     return {
        //         name: '',
        //         description: ''
        //     }
        // },
        props: {
            projects: {},
        },
        mounted() {
            console.log('Component mounted.')

            // axios.get('/skills').then(response => this.skills = response.data);
            // console.log(axios.response);
        }
    }
</script>
