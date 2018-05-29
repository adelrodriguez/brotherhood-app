from rest_framework import permissions

class AllowWriteAny(permissions.BasePermission):
    """
    Allow unauthenticated POST requests
    """

    def has_permission(self, request, view):
        return request.method == 'POST'