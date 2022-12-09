class BaseEntity {
    id = null

    constructor(id) {
        this.id = id ?? uuid()
    }
}