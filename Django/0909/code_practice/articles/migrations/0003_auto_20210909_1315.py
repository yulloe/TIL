# Generated by Django 3.2.7 on 2021-09-09 04:15

from django.db import migrations
import imagekit.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0002_article_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='article',
            name='image',
        ),
        migrations.AddField(
            model_name='article',
            name='image_thumb',
            field=imagekit.models.fields.ProcessedImageField(blank=True, upload_to=''),
        ),
    ]
