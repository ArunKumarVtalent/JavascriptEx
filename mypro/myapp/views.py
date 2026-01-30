from django.shortcuts import render

# Create your views here.
def demo(request):
    return render(request, 'demo.html')

def demo2(request):
    return render(request, 'demo2.html')

def demo3(request):
    return render(request, 'demo3.html')

def demo4(request):
    return render(request, 'demo4.html')