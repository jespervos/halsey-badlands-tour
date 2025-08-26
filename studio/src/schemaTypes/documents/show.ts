import {CheckmarkIcon, MarkerIcon} from '@sanity/icons'
import {format, parseISO, isPast} from 'date-fns'
import {defineField, defineType} from 'sanity'

/**
 * show schema.  Define and edit the fields for the 'show' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export const show = defineType({
  name: 'show',
  title: 'Show',
  icon: MarkerIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Tickets Link',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'continent',
      title: 'Continent',
      type: 'string',
      options: {
        list: [
          {title: 'North America', value: 'north-america'},
          {title: 'UK & Europe', value: 'uk-europe'},
          {title: 'Australia', value: 'australia'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      location: 'location',
      date: 'date',
    },
    prepare({location, date}) {
      const title = location
      const showDate = parseISO(date)
      const isCompleted = isPast(showDate)
      const subtitle = isCompleted
        ? `Completed on ${format(showDate, 'LLL d, yyyy')}`
        : `on ${format(showDate, 'LLL d, yyyy')}`
      const media = isCompleted ? CheckmarkIcon : MarkerIcon
      return {title, subtitle, media}
    },
  },
})
