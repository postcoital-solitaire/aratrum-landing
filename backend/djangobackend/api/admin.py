from django.contrib import admin
from rangefilter.filters import DateRangeFilterBuilder # https://github.com/silentsokolov/django-admin-rangefilter
from . import models
from django.http import HttpResponse
import csv

@admin.register(models.Reply)
class ReplyAdmin(admin.ModelAdmin):
    list_display = ('company', 'email', 'name', 'time')
    list_filter = (('time', DateRangeFilterBuilder()), 'company')
    actions = ('export_csv',)

    def export_csv(self, request, queryset):
        # https://books.agiliq.com/projects/django-admin-cookbook/en/latest/export.html
        fields = [f.name for f in self.model._meta.fields]
        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename={}.csv'.format(self.model._meta)
        csv_writer = csv.writer(response)
        csv_writer.writerow(fields)
        for q in queryset:
            csv_writer.writerow([getattr(q, f) for f in fields])
        return response

    export_csv.short_description = 'Export selected as .csv file'