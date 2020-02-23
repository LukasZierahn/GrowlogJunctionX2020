import Plant from "./Plant";

export default class Project {
    constructor(inpString="", name="") {
        if (name == "") {
            let inp = inpString.split("#")

            this.id = parseInt(inp[0]);
            this.name = inp[1];

            this.plants = []
            for (let plant of inp[2].split(";")) {
                if (plant != "") {
                    this.plants.push(new Plant(plant));
                }
            }
        } else {
            this.id = inpString; //Just dont ask
            this.name = name;

            this.plants = [
                new Plant(0, "Tomato"),
                new Plant(1, "Tomato"),
                new Plant(2, "Tomato"),
                new Plant(3, "Tomato"),
                new Plant(4, "Tomato"),
            ];
        }
    }

    toSafeString() {
        let plantString = "";
        for (let plant of this.plants) {
            plantString += plant.toSafeString()
        }

        return this.id + "#" + this.name + "#" + plantString + "*";
    }
}