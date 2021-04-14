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
  {% for post in site.posts limit: 3 %}
<li>
  {% case post.categories.first %}
    {% when 'documental' %}
     <span class="glyphicon glyphicon-facetime-video" aria-hidden="true"></span>
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
	
Profesor de Yoga & Desarrollo Humano. <br>
Inicia la práctica y estudio de Yoga y Judo Kodokán en 1972, durante 40 años participa en Escuelas de Sabiduría, conectando con el conocimiento ancestral, que involucra el Desarrollo Integral del Ser Humano. Actualmente integra Yoga y Sanación Energética en sus clases. Desde 2004 imparte la cátedra de Yoga & Desarrollo Humano en la Educación Superior. 

## Yoga

Yoga es una Ciencia Milenaria que ha acompañado al hombre a lo largo de toda su historia, las más diversas culturas humanas han dado testimonio de haberla utilizado como una herramienta preciosa en la búsqueda y realización de lo más noble y trascendente del ser humano. Yoga se presenta como un método, un sistema ordenado que involucra todos los aspectos de la persona y los integra de manera coherente para facilitar el desarrollo del potencial del Ser Humano.

## Yoga & Desarrollo Humano

Yoga & Desarrollo Humano, nos entregan una mirada sistémica y crítica para valorar lo que somos. Somos un cuerpo físico, somos emociones, somos pensamientos, y el uso que damos a cada una de estas dimensiones humanas, siempre afecta a todas. Esa valoración se expresa por el cuidado y el mantenimiento de estas tres dimensiones, haciéndonos cargo de lo que somos, y de nuestros actos, impactando positivamente en nosotros, la sociedad y el medio ambiente.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/TatrB2nvvaU" frameborder="1" allowfullscreen></iframe>
</div>

<p class="text-right">
<span class="glyphicon glyphicon-facetime-video" aria-hidden="true"></span>
<a href="https://www.youtube.com/watch?v=BwzKu3ABT38">Mundos Internos, Mundos Externos: Primera parte: Akasha</a>
</p>

## Crisis de Conciencia

Hay una manera nueva de ignorancia ligada al desarrollo mismo de la ciencia, hay una nueva ceguera ligada al uso degradado de la razón. Las amenazas más graves que enfrenta a la humanidad están ligadas al progreso ciego e incontrolado de conocimiento. Es necesario tomar conciencia de la naturaleza y de las consecuencias de los paradigmas presentes que mutilan el conocimiento y desfiguran la realidad. 

<!-- > "No hay diferencia entre vivir y aprender." — [Fritjof Capra](https://es.wikipedia.org/wiki/Fritjof_Capra) -->

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/OpGFLlpbG6Q" frameborder="1" allowfullscreen></iframe>
</div>


<p class="text-center">
<a class="btn btn-primary btn-lg" href="detalles.html" role="button">Yoga & D.H.</a>
<a class="btn btn-primary btn-lg" href="lugares.html" role="button">Lugares en Universidad de Chile</a>
</p>

