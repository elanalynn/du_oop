const fs = require('fs')

export class ObjectId {
  private id: number
  private filePath: string

  constructor(filePath = './db/objectId') {
    this.filePath = filePath
    this.setId()
  }

  public getId(): number {
    return this.id
  }
  
  public getLastId(filePath = this.filePath): number {
    const data = fs.readFileSync(filePath, 'utf8', (err, data) => {
      if (err) throw err
      return data
    })
    return data.split(',').pop()
  }

  private setId(): void {
    const lastId = this.getLastId()
    const nextId = +lastId + 1
    this.id = nextId
    this.saveId(nextId)
  }

  private saveId(id): void {
    fs.appendFile(this.filePath, `,${+id}`, err => {
      if (err) throw err
    })
  }
}
