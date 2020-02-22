import tomato from "@/assets/tomato.jpg"

export default class Plant {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.progress = Math.random();
        this.picture = tomato;
    }
}