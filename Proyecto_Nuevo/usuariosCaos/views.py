from django.shortcuts import render

# Create your views here.
def index(request):
        context={}
        return render(request, 'usuariosCaos/index.html', context)

def crud(request):
    usuarios = usuario.objets.all()
    context = {'usuarios': usuarios}
    return render(request, 'usuarios/usuarios_list.html', context)

def usuariosAdd(request):
        if request.method is not "POST":
                #no es un post, por lo tanto se muestra el formulario para agregar.
                generos=Genero.objets.all()
                context={'generos':generos}
                return render(request,'usuarios/usuarios_add.html', context)

        else:
                #es un post, por lo tanto se recuperan los datos del formulario 
                #y se graban en la tabla.

                rut=request.POST["rut"] 
                nombre=request.POST["nombre"]
                aPaterno=request.POST["paterno"]
                aMaterno=request.POst["materno"]
                fechaNac=request.POST["fechaNac"]
                genero=request.POST["genero"]
                telefono=request.POST["telefono"]
                email=request.POST["email"]
                direccion=request.POST["direccion"]
                activo="1"

                objGenero=Genero.objects.get(id_genero = genero)
                obj=Usuario.objects.create(  rut=rut,
                                             nombre=nombre,
                                             apellido_paterno=aPaterno,
                                             apellido_materno=aMaterno,
                                             fecha_nacimiento=fechaNac,
                                             id_genero=objGenero,
                                             telefono=telefono,
                                             email=email,
                                             direccion=direccion,
                                             activo=1)
                obj.save()
                context={'mensaje':"Ok, datos grabados..."}
                return render(request, 'usuarios/usuarios_add.html', context)                             
                                             