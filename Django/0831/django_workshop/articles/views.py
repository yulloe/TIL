from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')


def greeing(request):
    return render(request, 'hello.html', {'name': 'Alice'})