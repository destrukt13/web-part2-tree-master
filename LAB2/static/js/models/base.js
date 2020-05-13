class BaseModel {// eslint-disable-line no-unused-vars
  constructor (collectionName) {
    this.collectionName = collectionName
    this.fields = ['id']
  }
  /**
   * @returns {Number}
   */
  getNextId (collection) {
    return collection.length + 1
  }
  /**
   * @returns {Object}
   */
  GetEmpty () {
    const entry = {}

    this.fields.forEach(element => {
      entry[element] = null
    })

    return entry
  }
  /**
   * @returns {Array}
   */
  Select () {
    const stored = localStorage.getItem(this.collectionName)
    const collection = stored ? JSON.parse(stored) : []

    return collection
  }
  Commit (collection) {
    localStorage.setItem(this.collectionName, JSON.stringify(collection))
  }
  /**
   * @param {Number} id
   * @returns {BaseModel|undefined}
   */
  FindById (id) {
    return this.Select().find(item => item.id === id)
  }
  /**
   * @param {Number} id
   * @returns {Number}
   */
  FindIndexById (id) {
    return this.Select().findIndex(item => item.id === id)
  }
    /**
     * @param {Number} id
     * @param {Array} fields
     * @returns {Bool}
     */
  addOrUpdateById (id, fields) {
    let collection = this.Select();
    let index = this.FindIndexById(id)

    if (index) {
        for (const key in fields) {
            if (!this.fieds.hasOwnProperty(key) && this.fieds.key !== 'id') {
                console.log('Undefinded key:' + key )
                return false
            } else {
                collection[index][key] = fields[key]
            }
        }

        this.Commit(collection);
    } else {
        this.Create(fields)
    }

    return true
  }

    removeById (id) {
        let collection = this.Select();
        let index = this.FindIndexById(id)

        if (index) {

            collection.splice(index, 1);
            this.Commit(collection);
        } else {
            return false
        }

        return true
    }

  Create (row) {
    const collection = this.Select()
    const entry = this.GetEmpty()

    entry.id = this.getNextId(collection)
    for (const key in row) {
      if (entry.hasOwnProperty(key) &&
          entry.key !== 'id') {
        entry[key] = row[key]
      }
    }

    collection.push(entry)

    this.Commit(collection)

    const event = new CustomEvent(`${this.collectionName}ListDataChanged`, { detail: collection })
    document.dispatchEvent(event)
  }
}
