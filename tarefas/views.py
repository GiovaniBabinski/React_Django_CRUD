from rest_framework import viewsets
from .serializers import TarefaSerializer
from .models import Tarefa

class TarefaView(viewsets.ModelViewSet):
    serializer_class= TarefaSerializer
    queryset= Tarefa.objects.all()


