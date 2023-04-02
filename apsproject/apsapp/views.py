from django.db.models import Q
from django.http import HttpResponse
from django.shortcuts import render,redirect

from .forms import RegistrationForm,DepartmentForm,UpdateDepartmentForm
from .models import Employee,Registration,Department


def indexfunction(request):
    return render(request,"index.html")

def formdemofunction(request):
    return render(request,"formdemo.html")

def displayformdatafunction(request):
    if request.method == "POST":
        id=request.POST['id']
        name=request.POST['name']
        gender = request.POST['gender']
        dateofbirth = request.POST['dateofbirth']
        department = request.POST['department']
        emailid = request.POST['emailid']
        contactno = request.POST['contactno']
        return render(request,"displayform.html",{"id":id,"name":name,"gender":gender,"dob":dateofbirth,"dept":department,"email":emailid,"contactno":contactno})
    if request.method == "GET":
        id = request.GET['id']
        name = request.GET['name']
        gender = request.GET['gender']
        dateofbirth = request.GET['dateofbirth']
        department = request.GET['department']
        emailid = request.GET['emailid']
        contactno = request.GET['contactno']
        return render(request, "displayform.html",{"id": id, "name": name, "gender": gender, "dob": dateofbirth, "dept": department,"email": emailid, "contactno": contactno})

def logindemofunction(request):
    return render(request,"logindemo.html")

def checklogindemofunction(request):
    email = request.POST['emailid']
    pwd = request.POST['password']
    if email=="klu@gmail.com" and pwd=="klu":
        return HttpResponse("<b>Login Success</b>")
    else:
        return HttpResponse("<font color=red>Login Failed</font>")

def addemployeefunction(request):
    return render(request,"addemployee.html")

def saveemployeefunction(request):
    id = request.POST['id']
    name = request.POST['name']
    gender = request.POST['gender']
    dateofbirth = request.POST['dateofbirth']
    department = request.POST['department']
    emailid = request.POST['emailid']
    contactno = request.POST['contactno']
    employeeobj = Employee(emp_id=id,emp_name=name,emp_gender=gender,emp_dob=dateofbirth,emp_dept=department,emp_email=emailid,emp_contactno=contactno)
    Employee.save(employeeobj)
    return HttpResponse("Employee Added Successfully")

def registration(request):
    form = RegistrationForm()
    if request.method == "POST":
        form = RegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            msg="Successfully Registered"
            return render(request,"regsuccess.html",{"msg":msg})
        else:
            # return HttpResponse("Registraion Failed")
            fail = "Registraion Failed"
            return render(request, "registration.html", {"form": form, "failmsg": fail})
    return render(request,"registration.html",{"form":form})


def userlogin(request):
    return render(request,"userlogin.html")
def about(request):
    return render(request,"about.html")

def checkuserlogin(request):
    emailid=request.POST["emailid"]
    pwd=request.POST["password"]

    flag=Registration.objects.filter(Q(email=emailid) & Q(password=pwd))
    print(flag)

    if flag:
        user=Registration.objects.get(email=emailid)
        print(user)
        print(user.id,user.fullname,user.gender) #other fields also
        request.session["uname"]=user.username
        return render(request,"userhome.html",{"uname":user.username})
    else:
        msg="Login Failed"
        return render(request,"userlogin.html",{"msg":msg})

def userhome(request):
    uname=request.session["uname"]
    return render(request,"userhome.html",{"uname":uname})

def userlogout(request):
    return render(request,"userlogin.html")

def checksign(request):
    return render(request,"checksign.html")

def contactusfunction(request):
    return render(request,"contactus.html")
def viewusers(request):
    usersdata = Registration.objects.all()
    userscount = Registration.objects.count()
    return render(request,"viewusers.html",{"users":usersdata,"count":userscount})

def adddepartment(request):
    form=DepartmentForm()

    if request.method == "POST":
        form=DepartmentForm(request.POST)
        if form.is_valid():
            form.save()
            msg="Department Added Successfully"
            return render(request,"adddepartment.html",{"msg":msg,"deptform":form})
        else:
            msg="Failed to Add Department"
            return render(request, "adddepartment.html", {"msg": msg,"deptform":form})

    return render(request,"adddepartment.html",{"deptform":form})


def updatdepartment(request):
    form = UpdateDepartmentForm()

    if request.method == "POST":
        form=UpdateDepartmentForm(request.POST)

        id=form.data["dept_id"]
        hod = form.data["dept_hod"]
        location = form.data["dept_location"]

        flag=Department.objects.filter(dept_id=id)

        if flag:
            Department.objects.filter(dept_id=id).update(dept_hod=hod,dept_location=location)
            msg="Department Updated Successfully"
            return render(request, "updatedepartment.html", {"deptform": form,"msg":msg})
        else:
            msg="Department ID Not Found"
            return render(request, "updatedepartment.html", {"deptform": form, "msg": msg})

    else:
        return render(request,"updatedepartment.html",{"deptform":form})



    return render(request,"updatedepartment.html",{"deptform":form})


def deleteuser(request,uid):
    Registration.objects.filter(id=uid).delete()
    return redirect("viewusers")

def setcookies(request):
    response=HttpResponse("COOKIES DEMO")

    response.set_cookie("username","klu") #non persistent
    response.set_cookie("location","vijayawada",max_age=10) #persistent

    return response

def getcookies(request):

    uname=request.COOKIES.get("username")
    loc=request.COOKIES.get("location")

    if uname is not None and loc is not None:
        response=uname+","+loc
    elif uname is not None and loc is None:
        response = uname
    elif loc is not None and uname is None:
        response = loc
    else:
        response="COOKIES NOT FOUND"

    return HttpResponse(response)
