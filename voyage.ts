class Sejour {

    constructor (private _nom:string, private _prix: number) {
        this._nom = _nom;
        this._prix = _prix

    }

    get nom() {
        return this._nom;
    }

    get prix() {
        return this._prix;
    }
}

class SejourService {

    private _sejour : Sejour[] = [];
    constructor () {
        this._sejour.push(new Sejour("New-York", 3000));
        this._sejour.push(new Sejour("Italie", 800));
        this._sejour.push(new Sejour("Egypte", 700));

    }

    findByName(nom : string) : Sejour | void {

        for(let currentSejour of this._sejour) {
            if (currentSejour.nom === nom) {
                return currentSejour;
            }
        }

    }
}

const sejourService = new SejourService();
console.log(sejourService.findByName("New-York"));