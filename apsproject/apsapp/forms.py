from django import forms
from .models import Registration,Department, Feedback
from django.core.validators import RegexValidator
from django.contrib.auth.password_validation import validate_password

class DateInput(forms.DateInput):
    input_type = "date"

class RegistrationForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)
    def clean_password(self):
        password = self.cleaned_data.get('password')
        try:
            validate_password(password, self.instance)
        except forms.ValidationError as error:
            self.add_error('password', error)
        return password

    phone_regex = RegexValidator(regex=r'^[1-9]\d{9}$', message="Invalid phone number")
    contact = forms.CharField(validators=[phone_regex])
    class Meta:
        model = Registration
        fields = "__all__"    # it will display all the fields in the form except default fields like id and registrationtime
        widgets = {"password":forms.PasswordInput(),"dateofbirth":DateInput()}    # additional features of the fields
        labels = {"gender":"Select Gender", "Contact":"Provide Contact No"}  #using this, we can change label name in the form
        #exclude = {"gender"}       #using this, we can hide the fields in the form

class DepartmentForm(forms.ModelForm):
    class Meta:
        model = Department
        fields = "__all__"
        labels = {"dept_id":"Enter ID","dept_name":"Enter Name","dept_location":"Select Location","dept_hod":"Provide HOD"}

class UpdateDepartmentForm(forms.ModelForm):
    class Meta:
        model = Department
        fields = "__all__"
        labels = {"dept_id": "Enter ID","dept_location": "Select Location","dept_hod": "Provide HOD"}
        exclude = {"dept_name",}

class FeedbackForm(forms.ModelForm):
    class Meta:
        model = Feedback
        fields = ['name', 'email', 'rating', 'message']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control',"placeholder":"Enter your name"}),
            'email': forms.EmailInput(attrs={'class': 'form-control',"placeholder":"Enter your email"}),
            'message': forms.Textarea(attrs={'class': 'form-control', 'rows': 5}),
        }
        labels = {
            "message":"Write your feedback here"
        }