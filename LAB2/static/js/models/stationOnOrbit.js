class StationsOnOrbit extends BaseModel { // eslint-disable-line no-unused-vars, no-undef
    constructor () {
        super('stations_on_orbit')
        this.fields = this.fields.concat(['station', 'planet'])
    }
}
