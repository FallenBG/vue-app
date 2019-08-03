@extends('welcome')

@section('content')

    projects create<br>


    {{--@foreach($projects as $project)--}}
        {{--<example-component>--}}
            {{--<template slot="title">{{ $project->name }}</template>--}}
            {{--<template slot="description">{{ $project->description }}</template>--}}
        {{--</example-component>--}}
    {{--@endforeach--}}

    <form method="POST" action="/projects" class="ml-2 mr-2 mt-2" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.id)">
        @csrf
        <div class="form-group">
            <label for="name">Title</label>
            <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="Enter name" v-model="form.name">
            <span class="alert-danger" v-text="form.errors.get('name')" v-if="form.errors.has('name')"></span>
        </div>
        <div class="form-group">
            <label for="description">Password</label>
            <input type="text" class="form-control" id="description" placeholder="description" v-model="form.description">
            <span class="alert-danger" v-text="form.errors.get('description')" v-if="form.errors.has('description')"></span>
        </div>
        <button type="submit" class="btn btn-primary" :disabled="form.errors.any()">Create Project</button>
    </form>

    <example-component v-bind:projects="{{  json_encode($projects) }}"></example-component>
@endsection