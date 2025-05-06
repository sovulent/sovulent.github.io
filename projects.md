---
layout: default
title: Projects
---

# 💻 Projects

Here’s a sample of what I’ve been working on:

<div class="projects">
  {% for project in site.projects %}
    <div class="project-card">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <p><em>Status: {{ project.status }}</em></p>
    </div>
  {% endfor %}
</div>
