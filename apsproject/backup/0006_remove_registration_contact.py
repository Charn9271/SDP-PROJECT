# Generated by Django 4.1.7 on 2023-05-05 19:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('apsapp', '0005_alter_registration_contact'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='registration',
            name='contact',
        ),
    ]
