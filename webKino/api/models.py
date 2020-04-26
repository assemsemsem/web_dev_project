from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=30)

    def to_json(self):
        return{
            'id':self.id,
            'name':self.name,
        }



class Film(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField(default='')
    imgUrl = models.URLField(default='https://image.flaticon.com/icons/png/512/18/18436.png')
    category = models.ForeignKey(Category, on_delete=models.CASCADE,
                                 related_name='films')

    def to_json(self):
        return{
            'id':self.id,
            'name':self.name,
            'description':self.description,
            'imgUrl':self.imgUrl,
            'category':self.category.name
        }