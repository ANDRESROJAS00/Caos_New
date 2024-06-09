from django.shortcuts import render

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
