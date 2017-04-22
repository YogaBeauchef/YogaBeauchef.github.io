---
title: Yoga Beauchef
subtitle: Conocete a Ti Mismo
bigimg: assets/img/header/carousel-1.jpg
print-title: true
layout: page
---

> "Sólo se volverá clara tu visión cuando puedas mirar en tu propio corazón. Porqué quién mira hacia afuera sueña, y quién mira hacia adentro despierta." — [Carl Gustav Jung](https://es.wikipedia.org/wiki/Carl_Gustav_Jung)

## Noticias y Artículos

<ul>
  {% for post in site.posts limit: 2 %}
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

<p class="text-right"><a href="{{ site.url }}/articulos.html" title="Otros artículos y eventos">más noticias y artículos...</a></p>

## Diego Reyes Hochfarber

<img src="{{ site.url }}/assets/img/person/diego.png" class="img-responsive img-thumbnail pull-left gap-right" alt="Diego Reyes Hochfarber" width="131em" />
	
Profesor de Yoga & Desarrollo Humano

Inicia la práctica y estudio de la Yoga el año 1972, emprendiendo un camino de búsqueda hacia el equilibrio interno que combina con la práctica de Judo Kodokán, alcanzando el 3er Dan. Desde el año 2004, imparte la cátedra de Yoga & Desarrollo Humano en la Educación Superior.

## Yoga

Yoga es una Ciencia Milenaria que ha acompañado al hombre a lo largo de toda su historia, las más diversas culturas humanas han dado testimonio de haberla utilizado como una herramienta preciosa en la búsqueda y realización de lo más noble y trascendente del ser humano. Yoga se presenta como un método, un sistema ordenado que involucra todos los aspectos de la persona y los integra de manera coherente para facilitar el desarrollo del potencial del Ser Humano.

## Yoga & Desarrollo Humano

<div class="clearfix">
<img src="{{ site.url }}/assets/img/logo/mini.png" class="img-responsive pull-right gap-left" alt="Logo Yoga Beauchef" width="100" height="100" />

Yoga & Desarrollo Humano, nos entregan una mirada sistémica y crítica para valorar lo que somos. Somos un cuerpo físico, somos emociones, somos pensamientos, y el uso que damos a cada una de estas dimensiones humanas, siempre afecta a todas. Esa valoración se expresa por el cuidado y el mantenimiento de estas tres dimensiones, haciéndonos cargo de lo que somos, y de nuestros actos, impactando positivamente en nosotros, la sociedad y el medio ambiente.

</div>
<p class="text-right">
<span class="glyphicon glyphicon-facetime-video" aria-hidden="true"></span>
<a href="https://www.youtube.com/watch?v=BwzKu3ABT38">Mundos Internos, Mundos Externos: Primera parte: Akasha</a>
</p>

<p class="text-center">
<a class="btn btn-primary btn-lg" href="detalles.html" role="button">Yoga & D.H.</a>
<a class="btn btn-primary btn-lg" href="lugares.html" role="button">Lugares en Universidad de Chile</a>
</p>

