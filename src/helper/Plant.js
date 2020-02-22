export default class Plant {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.progress = Math.random();
    }
}