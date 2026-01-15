from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ItemViewSet

# default router allows automatic routing
router = DefaultRouter()
router.register(r'items', ItemViewSet)
urlpatterns = [path('', include(router.urls)),]