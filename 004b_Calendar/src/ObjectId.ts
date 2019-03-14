const fs = require('fs')

export class ObjectId {
  constructor() {
    this.createId()
  }
  
  public getLastId(filePath = './db/objectId'): number {
    const data = fs.readFileSync(filePath, 'utf8', (err, data) => {
      if (err) throw err
      return data
    })
    return data.split(',').pop()
  }

  private createId(): void {
    const lastId = this.getLastId()
    const nextId = +lastId + 1
    this.saveId(nextId)
  }

  private saveId(id): void {
    fs.appendFile('./db/objectId', `,${+id}`, err => {
      if (err) throw err
    })
  }
}
