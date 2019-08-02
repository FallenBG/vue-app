<?php

namespace App\Http\Controllers;

use App\Project;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{

    public function index()
    {
        dd('kur');
    }

    public function show()
    {

    }

    public function create()
    {
        $projects = Project::all();
        return view('projects.create', compact('projects'));
    }

    public function store(Project $project)
    {
//        dd(\request());
        $validated = \Request::validate([
            'name' => 'required',
            'description' => 'required'
        ]);

//        dd($validated);
        $project->create($validated);

        return ['message' => 'Project Created!'];
//        return redirect('/projects/{project}');
    }
}
