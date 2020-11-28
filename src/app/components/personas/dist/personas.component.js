"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PersonasComponent = void 0;
var core_1 = require("@angular/core");
var sweetalert2_1 = require("sweetalert2");
var persona_model_1 = require("../../models/persona.model");
var PersonasComponent = /** @class */ (function () {
    function PersonasComponent(servicio, route) {
        this.servicio = servicio;
        this.route = route;
        this.persona = new persona_model_1.PesonaModel();
        this.personas = [];
    }
    PersonasComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        if (id !== "nuevo") {
            this.servicio.getByID("personas", id).subscribe(function (data) {
                _this.persona = data[1];
                _this.persona._id = data[1]._id;
                console.log(data);
            });
        }
    };
    PersonasComponent.prototype.guardar = function (form) {
        var _this = this;
        if (form.invalid) {
            console.log('Formulario invalido');
            return;
        }
        sweetalert2_1["default"].fire({
            title: 'Espere',
            text: 'Guardando información',
            allowOutsideClick: false
        });
        sweetalert2_1["default"].showLoading();
        var peticion;
        if (this.persona._id) {
            peticion = this.servicio.actualizarPersonas(this.persona, this.persona._id);
            peticion.subscribe(function (data) {
                sweetalert2_1["default"].fire({
                    title: _this.persona.nombres + " " + _this.persona.apellidoPaterno,
                    text: 'Se actualizó correctamente'
                });
            });
        }
        else {
            peticion = this.servicio.crearPersona(this.persona);
            peticion.subscribe(function (data) {
                sweetalert2_1["default"].fire({
                    title: _this.persona.nombres + " " + _this.persona.apellidoPaterno,
                    text: 'Se actualizó correctamente'
                });
                _this.persona._id = data[1]._id;
            });
        }
        /*  this.servicio.crearPersona(this.persona).
            subscribe(resp => {
              console.log(resp);
            this.persona = resp;
            });
          */
    };
    PersonasComponent = __decorate([
        core_1.Component({
            selector: 'app-personas',
            templateUrl: './personas.component.html',
            styleUrls: ['./personas.component.css']
        })
    ], PersonasComponent);
    return PersonasComponent;
}());
exports.PersonasComponent = PersonasComponent;
