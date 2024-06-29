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
        else:
             
             rut:request.POST["rut"]
             nombre=request.POST["nombre"]
             aPaterno=request.POST["paterno"]
             aMaterno=request.POST["materno"]
             fechaNac=request.POST["fechaNac"]
             genero=request.POST["genero"]
             telefono=request.POST["telefono"]
             email=request.POST["email"]
             direccion=request.POST["direccion"]
             activo="1"

             objGenero=Genero.objects.get(id_genero = genero)
             obj=UsuariosCaosNews.objects.create(   rut=rut,
                                                 nombre=nombre,
                                                 apellido_paterno=aPaterno,
                                                 apellido_materno=aMaterno,
                                                 fecha_nacimiento=fechaNac,
                                                 id_genero=objGenero,
                                                 telefono=telefono,
                                                 email=email,
                                                 direccion=direccion,
                                                 activo=1 )
             obj.save()
             context={'mensaje':"Ok, datos grabados..."}
             return render(request, 'usuariosCaos/usuariosC_add.html', context)

