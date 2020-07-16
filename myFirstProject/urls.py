from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('',  include('frontend.urls')),
    path('',  include('traversy.urls')),
    path('',  include('auth_acccounts.urls'))
]
