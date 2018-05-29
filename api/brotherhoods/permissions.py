from rest_framework import permissions

class AllowWriteAny(permissions.BasePermission):
    """
    Allow unauthenticated POST requests
    """
    def has_permission(self, request, view):
        if request.method == 'POST':
            return True
        elif request.user and request.user.is_authenticated:
            return True
        return False