from django.contrib import admin
from django.urls import path, include
from django.shortcuts import redirect

urlpatterns = [
    path('admin/', admin.site.urls),
    path('usuariosCaos/', include('usuariosCaos.urls')),
    path('', lambda request: redirect('login')),  # Redirige la raíz al login
]
