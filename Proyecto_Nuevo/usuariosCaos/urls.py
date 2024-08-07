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
    path('usuarios_del/<str:pk>', views.usuarios_del, name='usuarios_del'),
    path('usuarios_finEdit/<str:pk>/', views.usuarios_finEdit, name='usuarios_finEdit'),
    path('usuariosUpdate', views.usuariosUpdate, name='usuarioUpdate'),

    path('register/', views.register_view, name='register'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),

    path('index_user/', views.index_user, name='index_user'),
]






