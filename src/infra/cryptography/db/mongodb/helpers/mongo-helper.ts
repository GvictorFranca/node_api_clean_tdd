import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,

  async connect (url: string) {
    this.client = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },
  async disconnect () {
    this.client.close()
  },

  getColletction (name: string): Collection {
    return this.client.db().collection(name)
  },

  map: (collection: any): any => {
    const { _id, ...colletionWithoutId } = collection
    return Object.assign({}, colletionWithoutId, { id: _id })
  }
}

/* map: Sempre o "id" no mongoDb sera _id,
  dai a necessidade de fazer uma conversao,e interessante que seja
  generico pois sera utilizado em outros lugares
  */
