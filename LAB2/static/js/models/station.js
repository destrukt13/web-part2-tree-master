class Station extends BaseModel { // eslint-disable-line no-unused-vars, no-undef
    constructor () {
        super('stations')
        this.fields = this.fields.concat(['capacity', 'need'])
    }
}
