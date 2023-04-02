from django.urls import path
from . import views

# . represents current directory

urlpatterns = [
    path("",views.indexfunction,name="index"),
    path("formdemo",views.formdemofunction,name="formdemo"),
    path("displayformdata",views.displayformdatafunction,name="displayformdata"),
    path("logindemo",views.logindemofunction,name="logindemo"),
    path("checklogindemo",views.checklogindemofunction,name="checklogindemo"),
    path("addemployee",views.addemployeefunction,name="addemployee"),
    path("saveemployee",views.saveemployeefunction,name="saveemployee"),

    path("registration",views.registration,name="registration"),
    path("userlogin",views.userlogin,name="userlogin"),
    path("checkuserlogin",views.checkuserlogin,name="checkuserlogin"),

    path("userhome",views.userhome,name="userhome"),
    path("userlogout",views.userlogout,name="userlogout"),
    path("viewusers",views.viewusers,name="viewusers"),

    path("adddepartment",views.adddepartment,name="adddepartment"),

    path("updatedepartment",views.updatdepartment,name="updatedepartment"),

    path("deleteuser/<int:uid>",views.deleteuser,name="deleteuser"),

    path("setcookies",views.setcookies,name="setcookies"),

    path("getcookies",views.getcookies,name="getcookies"),
    path("checksign",views.checksign,name="checksign"),
    path("about",views.about,name="about"),
    path("contactus",views.contactusfunction,name="contactus"),


]
