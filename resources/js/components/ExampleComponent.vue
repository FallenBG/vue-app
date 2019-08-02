<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card" v-for="skill in skills">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        {{ skill }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                skills: []
            }
        },
        mounted() {
            console.log('Component mounted.')

            axios.get('/skills').then(response => this.skills = response.data);
            // console.log(axios.response);
        }
    }
</script>
