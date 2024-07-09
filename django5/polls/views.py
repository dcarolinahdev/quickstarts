from django.http import Http404, HttpResponse #
from django.shortcuts import get_object_or_404, render
from django.template import loader #

from .models import Question

def index(request):
    latest_question_list = Question.objects.order_by("-pub_date")[:5]
    template_name = "polls/index.html"
    context = {
        "latest_question_list": latest_question_list,
    }
    return render(request, template_name, context)

def detail(request, question_id):
    template_name = "polls/detail.html"
    
    try:
        question = Question.objects.get(pk=question_id)
    except Question.DoesNotExist:
        raise Http404("Question does not exist")
    
    return render(request, template_name, {"question": question})

def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)

def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)
