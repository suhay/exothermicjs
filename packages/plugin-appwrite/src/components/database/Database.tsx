import { AppwrieApiDatabase } from '~/types'
import { GetDocument } from './GetDocument'
import { ListDocuments } from './ListDocuments'
import { UpdateDocument } from './UpdateDocument'

export function Database({ action, collection, items }: Omit<AppwrieApiDatabase, 'api'>) {
  switch (action) {
    case 'list':
      return <ListDocuments collection={collection} items={items} />
    case 'get':
      return <GetDocument collection={collection} items={items} />
    case 'update':
      return <UpdateDocument collection={collection} />
    default:
      return null
  }
}
