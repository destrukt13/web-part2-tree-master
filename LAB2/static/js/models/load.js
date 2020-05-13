class Loads extends BaseModel { // eslint-disable-line no-unused-vars, no-undef
    constructor () {
        super('loads')
        this.fields = this.fields.concat(['code', 'name', 'weight'])
    }
}
