---
title: Artículos & Eventos
print-title: false
layout: page
---

# Noticias y Artículos

<ul>
  {% for post in site.posts %}
<li>
  {% case post.categories.first %}
    {% when 'evento' %}
     <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>
    {% when 'artículo' %}
     <span class="glyphicon glyphicon-education" aria-hidden="true"></span>
    {% when 'noticia' %}
     <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
  {% endcase %}
    {% if post.author %}
	  <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
	   por {{ post.author }},
	{% else %}
	  <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>,
	{% endif %}
	<span class="post-meta">{% include translated-date.html date=post.date %}</span>
    </li>
  {% endfor %}
</ul>

<p class="text-center">
<a class="btn btn-primary btn-lg" href="index.html" role="button">Página Principal</a>
</p>
