from rest_framework.serializers import ModelSerializer
from active.models import Active

class ActiveSerializer(ModelSerializer):
  class Meta:
    model = Active
    fields = '__all__'