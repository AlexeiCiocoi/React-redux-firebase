

export class Todo {

    constructor(text, id, state, show = true) {
        this.text = text;
        this.id = id;
        this.state = state;
        this.show = show;
    }

    _getData() {
        return `Text ${this.text}`;
    }
}