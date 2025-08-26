import type {StructureBuilder, StructureResolver} from 'sanity/structure'

/**
 * Structure builder is useful whenever you want to control how documents are grouped and
 * listed in the studio or for adding additional in-studio previews or content to documents.
 * Learn more: https://www.sanity.io/docs/structure-builder-introduction
 */

export const structure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title('Shows')
    .items([
      S.listItem()
        .title('All Shows')
        .child(
          S.documentTypeList('show')
            .title('All Shows')
            .defaultOrdering([{field: 'date', direction: 'asc'}]),
        ),
      S.listItem()
        .title('Upcoming Shows')
        .child(
          S.documentTypeList('show')
            .title('Upcoming Shows')
            .filter('date >= $today')
            .params({today: new Date().toISOString().split('T')[0]})
            .defaultOrdering([{field: 'date', direction: 'asc'}]),
        ),
      S.listItem()
        .title('Past Shows')
        .child(
          S.documentTypeList('show')
            .title('Past Shows')
            .filter('date < $today')
            .params({today: new Date().toISOString().split('T')[0]})
            .defaultOrdering([{field: 'date', direction: 'desc'}]),
        ),
      S.divider(),
      S.listItem()
        .title('By Continent')
        .child(
          S.list()
            .title('Shows by Continent')
            .items([
              S.listItem()
                .title('North America')
                .child(
                  S.documentTypeList('show')
                    .title('North America Shows')
                    .filter('continent == "north-america"')
                    .defaultOrdering([{field: 'date', direction: 'asc'}]),
                ),
              S.listItem()
                .title('UK & Europe')
                .child(
                  S.documentTypeList('show')
                    .title('UK & Europe Shows')
                    .filter('continent == "uk-europe"')
                    .defaultOrdering([{field: 'date', direction: 'asc'}]),
                ),
              S.listItem()
                .title('Australia')
                .child(
                  S.documentTypeList('show')
                    .title('Australia Shows')
                    .filter('continent == "australia"')
                    .defaultOrdering([{field: 'date', direction: 'asc'}]),
                ),
            ]),
        ),
    ])
