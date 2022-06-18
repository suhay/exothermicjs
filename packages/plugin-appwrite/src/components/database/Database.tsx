import { AppwrieApiDatabase } from '~/types'
import { CreateDocument } from './CreateDocument'
import { GetDocument } from './GetDocument'
import { ListDocuments } from './ListDocuments'
import { UpdateDocument } from './UpdateDocument'

export function Database({
  action,
  collection,
  items,
  editable,
  randomize,
  control,
  setValue,
}: Omit<AppwrieApiDatabase, 'api'>) {
  switch (action) {
    case 'list':
      return (
        <ListDocuments
          collection={collection}
          items={items}
          randomize={randomize}
          control={control}
          setValue={setValue}
        />
      )
    case 'get':
      return <GetDocument collection={collection} items={items} editable={editable} />
    case 'update':
      return <UpdateDocument collection={collection} items={items} />
    case 'create':
      return <CreateDocument collection={collection} items={items} />
    default:
      return null
  }
}
