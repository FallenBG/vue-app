/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);


class Errors {
    constructor() {
        this.errors = {};
    }
    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }
    record (errors) {
        this.errors = errors;
    }
    clear (field) {
        if (this.errors[field]) {
            delete this.errors[field];
        }
    }
    has (field) {
        return this.errors.hasOwnProperty(field);
    }
    any () {
        return Object.keys(this.errors).length > 0;
    }
}


class Form {
    constructor (fields) {
        this.originalFields = fields;
        for (let field in fields) {
            this[field] = fields[field];
        }

        this.errors = new Errors();
    }
    reset () {
        for (let field in this.originalFields) {
            this[field] = '';
        }
    }

    data() {
        let data = Object.assign({}, this);
        delete data.originalFields;
        delete data.errors;

        return data;
    }

    submit (requestType, url) {
        axios[requestType](url, this.data())
            .then(this.onSuccess.bind(this))
            .catch(this.onFail.bind(this))
            // .catch(error => this.errors.record(error.response.data.errors));
    }

    onSuccess(response) {
        alert(response.data.message);
        // this.errors.clear();
        this.reset();
    }

    onFail(error) {
        alert('fail');

        this.errors.record(error.response.data.errors)
    }
}
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    data() {
        return {
            form: new Form({
                name: '',
                description: '',
            })
        }
    },

    // data: {
    //     form: new Form({
    //         name: '',
    //         description: '',
    //     })
    // },
    mounted() {
        console.log('app.jss');
    },
    methods: {
        onSubmit() {
            // console.log(this.$data);
            this.form.submit('post', '/projects');
            // axios.post('/projects', {
            //     name: this.form.name,
            //     description: this.form.description
            // })
            //     .then(this.onSuccess)
            //     .catch(error => this.form.errors.record(error.response.data.errors));
        },

    }
});
