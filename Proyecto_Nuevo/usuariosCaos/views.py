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
    if request.method == "POST":
        rut = request.POST.get("rut")
        nombre = request.POST.get("nombre")
        aPaterno = request.POST.get("paterno")
        aMaterno = request.POST.get("materno")
        fechaNac = request.POST.get("fechaNac")
        genero_id = request.POST.get("genero")
        telefono = request.POST.get("telefono")
        email = request.POST.get("email")
        direccion = request.POST.get("direccion")
        activo = 1

        # Obtener el objeto Genero basado en su id
        objGenero = Genero.objects.get(id_genero=genero_id)

        # Crear el objeto UsuariosCaosNews
        usuario = UsuariosCaosNews(
            rut=rut,
            nombre=nombre,
            apellido_paterno=aPaterno,
            apellido_materno=aMaterno,
            fecha_nacimiento=fechaNac,
            id_genero=objGenero,
            telefono=telefono,
            email=email,
            direccion=direccion,
            activo=activo
        )
        usuario.save()

        # Preparar el contexto con un mensaje de éxito
        context = {'mensaje': "Ok, datos grabados..."}

        return render(request, 'usuariosCaos/usuariosC_add.html', context)

    else:
        # Si no es un POST, mostrar el formulario vacío
        generos = Genero.objects.all()
        context = {'generos': generos}
        return render(request, 'usuariosCaos/usuariosC_add.html', context)

def usuarios_del(request, pk):
    context = {}
    try:
        usuario = UsuariosCaosNews.objects.get(rut=pk)
        usuario.delete()
        mensaje = "Bien, datos eliminados..."
        # Consultar todos los usuarios después de eliminar
        usuariosC = UsuariosCaosNews.objects.all()
        context = {'usuariosC': usuariosC, 'mensaje': mensaje}
    except UsuariosCaosNews.DoesNotExist:
        mensaje = "Error, rut no existe..."
        # Consultar todos los usuarios si hay un error
        usuariosC = UsuariosCaosNews.objects.all()
        context = {'usuariosC': usuariosC, 'mensaje': mensaje}
    
    return render(request, 'usuariosCaos/usuariosC_list.html', context)

def usuarios_finEdit(request, pk):
    if pk != "":
        usuario = UsuariosCaosNews.objects.get(rut=pk)
        generos = Genero.objects.all()

        context = {'usuario': usuario, 'generos': generos}
        if usuario:
            return render(request, 'usuariosCaos/usuariosC_edit.html', context)
        else:
            context = {'mensaje': "Error, rut no existe..."}
            return render(request, 'usuariosCaos/usuariosC_list.html', context)


from django.shortcuts import render, redirect
from .models import UsuariosCaosNews, Genero

def usuariosUpdate(request):
    if request.method == "POST":
        # Es un POST, por lo tanto se recuperan los datos del formulario y se actualizan en la tabla.
        rut = request.POST["rut"]
        nombre = request.POST["nombre"]
        aPaterno = request.POST["paterno"]
        aMaterno = request.POST["materno"]
        fechaNac = request.POST["fechaNac"]
        genero_id = request.POST["genero"]  # Id del género seleccionado en el formulario
        telefono = request.POST["telefono"]
        email = request.POST["email"]
        direccion = request.POST["direccion"]
        activo = 1  # Activo debe ser un entero

        # Obtener el objeto Genero basado en su id
        objGenero = Genero.objects.get(id_genero=genero_id)

        # Obtener el objeto UsuariosCaosNews que se va a actualizar (si existe)
        try:
            usuario = UsuariosCaosNews.objects.get(rut=rut)
        except UsuariosCaosNews.DoesNotExist:
            # Manejar el caso en que el usuario no exista (podría ser una creación en lugar de actualización)
            usuario = UsuariosCaosNews(rut=rut)

        # Asignar los nuevos valores al objeto usuario
        usuario.nombre = nombre
        usuario.apellido_paterno = aPaterno
        usuario.apellido_materno = aMaterno
        usuario.fecha_nacimiento = fechaNac
        usuario.id_genero = objGenero
        usuario.telefono = telefono
        usuario.email = email
        usuario.direccion = direccion
        usuario.activo = activo

        # Guardar los cambios en la base de datos
        usuario.save()

        # Obtener todos los géneros para mostrar en el contexto
        generos = Genero.objects.all()

        # Preparar el contexto con un mensaje de éxito y los datos actualizados
        context = {
            'mensaje': "Ok, datos actualizados...",
            'generos': generos,
            'usuario': usuario
        }

        # Renderizar la lista de usuarios con el contexto actualizado
        return render(request, 'usuariosCaos/usuariosC_list.html', context)

    else:
        # Si no es un POST, simplemente redirigir o manejar según tu lógica de la aplicación
        return redirect('inicio')  # Cambiar 'inicio' por la URL deseada si es necesario








