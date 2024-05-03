export class Person {
    _name: string;
    _feeling: string;
    _lover: string;

    constructor(name: string = "", feeling: string = "", lover: string = "") {
        this._name = name;
        this._feeling = feeling;
        this._lover = lover;
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }

    get feeling(): string {
        return this._feeling;
    }

    set feeling(newFeeling: string) {
        this._feeling = newFeeling;
    }

    get lover(): string {
        return this._lover;
    }

    set lover(newLover: string) {
        this._lover = newLover;
    }


    heal(another: Person) {
        another.feeling = 'good';
    }

    relax(another: Person) {
        another.feeling = 'relaxed';
    }

    laugh() {
        this.feeling = "fun";
    }

    cheer(another: Person): Person {
        return another;
    }

    made(another: Person): Person {
        return another;
    }

    happy() {
        this.feeling = "happy";
    }

    apologize(another: Person) {
        another.feeling = "forgived";
    }

    areBeside(another: Person) {
        another.feeling = "in love";
    }

    up() {
        this.feeling = "cozy";
    }

    hug(another: Person) {
        another.feeling = "calm";
    }
}