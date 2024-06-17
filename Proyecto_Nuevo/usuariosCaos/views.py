from django.shortcuts import render, redirect

from .models import UsuariosCaosNews,Genero
# Create your views here.

def registro(request):
    return render(request, 'usuariosCaos/registro.html')

def carrito(request):
    return render(request, 'usuariosCaos/carrito.html')

def deportes(request):
    return render(request, 'usuariosCaos/deportes.html')

def economia(request):
    return render(request, 'usuariosCaos/economia.html')

def chile(request):
    return render(request, 'usuariosCaos/chile.html')

def mundo(request):
    return render(request, 'usuariosCaos/mundo.html')

def api(request):
    return render(request, 'usuariosCaos/API.html')

def index(request):
    return render(request, 'usuariosCaos/index.html')



def formulario(request):
    usuarios = UsuariosCaosNews.objects.all()
    context = {"usuarios": usuarios}
    return render(request, 'usuariosCaos/formulario.html', context)


def crud(request):
        usuarios = UsuariosCaosNews.objects.all()
        context = {"usuarios": usuarios}
        return render(request, 'usuariosCaos/usuariosC_list.html', context)

def usuariosAdd(request):
        if request.method is not "POST":
                generos=Genero.objects.all()
                context={'generos':generos}
                return render(request, 'usuariosCaos/usuariosC_add.html', context)

