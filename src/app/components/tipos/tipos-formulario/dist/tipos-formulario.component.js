"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TiposFormularioComponent = void 0;
var core_1 = require("@angular/core");
var tipo_model_1 = require("src/app/models/tipo.model");
var sweetalert2_1 = require("sweetalert2");
var TiposFormularioComponent = /** @class */ (function () {
    function TiposFormularioComponent(servicio, route) {
        this.servicio = servicio;
        this.route = route;
        this.tipo = new tipo_model_1.TipoModel();
        this.tipos = [];
    }
    TiposFormularioComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        if (id !== "nuevo") {
            this.servicio.getByID("tipos", id).subscribe(function (data) {
                _this.tipo = data[1];
                _this.tipo._id = data[1]._id;
                console.log(data);
            });
        }
    };
    TiposFormularioComponent.prototype.guardar = function (form) {
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
        if (this.tipo._id) {
            console.log("act");
            peticion = this.servicio.actualizarTipos(this.tipo, this.tipo._id);
            peticion.subscribe(function (data) {
                sweetalert2_1["default"].fire({
                    title: "" + _this.tipo.descripcion,
                    text: 'Se actualizó correctamente'
                });
                //this.tipo._id = data[1]._id;
            });
        }
        else {
            peticion = this.servicio.crearTipos(this.tipo);
            console.log("crear");
            peticion.subscribe(function (data) {
                sweetalert2_1["default"].fire({
                    title: "" + _this.tipo.descripcion,
                    text: 'Se actualizó correctamente'
                });
                _this.tipo._id = data[1]._id;
            });
        }
    };
    TiposFormularioComponent = __decorate([
        core_1.Component({
            selector: 'app-tipos-formulario',
            templateUrl: './tipos-formulario.component.html',
            styleUrls: ['./tipos-formulario.component.css']
        })
    ], TiposFormularioComponent);
    return TiposFormularioComponent;
}());
exports.TiposFormularioComponent = TiposFormularioComponent;
