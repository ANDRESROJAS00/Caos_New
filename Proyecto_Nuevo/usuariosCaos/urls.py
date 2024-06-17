from django.urls import path
from . import views


urlpatterns = [
    path('registro', views.registro, name='registro'),
    path('carrito', views.carrito, name='carrito'),
    path('deportes', views.deportes, name='deportes'),
    path('economia', views.economia, name='economia'),
    path('chile', views.chile, name='chile'),
    path('mundo', views.mundo, name='mundo'),
    path('api', views.api, name='api'),
    path('index', views.index, name='index'),
    path('formulario', views.formulario, name='formulario'),
    path('crud', views.crud, name='crud'),
    path('usuariosAdd', views.usuariosAdd, name='usuariosAdd'),
]





