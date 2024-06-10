export class Todo {
    id: number; 
    done: boolean; 
    color: string; 
    completedColor: string; 

    constructor(public text: string, color: string, completedColor: string = '#00ff33') {
        this.id = Date.now(); 
        this.done = false; 
        this.color = color; 
        this.completedColor = completedColor; 
    }
}