"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        enumerable: false,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejour = [];
        this._sejour.push(new Sejour("New-York", 3000));
        this._sejour.push(new Sejour("Italie", 800));
        this._sejour.push(new Sejour("Egypte", 700));
    }
    SejourService.prototype.findByName = function (nom) {
        for (var _i = 0, _a = this._sejour; _i < _a.length; _i++) {
            var currentSejour = _a[_i];
            if (currentSejour.nom === nom) {
                return currentSejour;
            }
        }
    };
    return SejourService;
}());
var sejourService = new SejourService();
console.log(sejourService.findByName("New-York"));
