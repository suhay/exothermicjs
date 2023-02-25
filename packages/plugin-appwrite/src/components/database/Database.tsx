import { AppwriteApiDatabase } from '../../types'
import { CreateDocument } from './CreateDocument'
import { GetDocument } from './GetDocument'
import { ListDocuments } from './ListDocuments'
import { UpdateDocument } from './UpdateDocument'

export function Database({
  action,
  collection,
  items,
  control,
  setValue,
  options,
}: Omit<AppwriteApiDatabase, 'api'>) {
  switch (action) {
    case 'list':
      return (
        <ListDocuments
          collection={collection}
          items={items}
          control={control}
          setValue={setValue}
          options={options}
        />
      )
    case 'get':
      return <GetDocument collection={collection} items={items} options={options} />
    case 'update':
      return <UpdateDocument collection={collection} items={items} options={options} />
    case 'create':
      return <CreateDocument collection={collection} items={items} options={options} />
    default:
      return null
  }
}
