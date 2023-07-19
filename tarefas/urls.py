from django.urls import include, path
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from tarefas import views

router = routers.DefaultRouter()
router.register(r"tarefas", views.TarefaView, "tarefas")

urlpatterns = [
    path("api/", include(router.urls)),
    path("docs/",include_docs_urls(title='Tarefas API'))
]

