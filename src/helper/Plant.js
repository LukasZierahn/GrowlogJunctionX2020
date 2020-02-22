import tomato from "@/assets/tomato.jpg"

export default class Plant {
    constructor(inpString="", name="") {
        if (name == "") {
            let inp = inpString.split(",")

            this.id = parseInt(inp[0]);
            this.name = inp[1];
            this.progress = parseFloat(inp[2]);
            this.picture = tomato;

            this.nextWaterNeed = new Date(parseInt(inp[3]));
        } else {
            this.id = inpString; //Just dont ask
            this.name = name;
            this.progress = Math.random();
            this.picture = tomato;

            this.nextWaterNeed = new Date((new Date()).getTime() + 36*3600*1000 * Math.random())    
        }
    }

    toSafeString() {
        return this.id + "," + this.name + "," + this.progress + "," + this.nextWaterNeed.getTime() + ";";
    }

    Water() {
        console.log("click");
        this.nextWaterNeed = new Date((new Date()).getTime() + 36*3600*1000)    
    }
}