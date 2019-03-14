const fs = require('fs')

export class ClassId {
  private id: string
  private filePath: string
  
  constructor(id: string, filePath: string = './db/classId') {
    this.id = id
    this.filePath = filePath
    this.findOrCreateId(id, filePath)
  }
  
  public getLastId(filePath): string {
    const data = this.readFile(filePath)
    return data.split(',').pop()
  }

  private findOrCreateId(id, filePath): void {
    const data = this.readFile(filePath)
    data.split(',').indexOf(id) !== -1 ? id : this.createId(id, filePath)
  }

  private createId(id, filePath): void {
    fs.appendFile(filePath, `,${+id}`, err => {
      if (err) throw err
    })
  }

  private readFile(filePath) {
    return fs.readFileSync(filePath, 'utf8', (err, data) => {
      if (err) throw err
      return data
    })
  }
}
