webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n  <app-header [player]=\"player\"></app-header>\n  <app-playlist></app-playlist>\n  <app-animation #animation></app-animation>\n  <app-player #player [animation]=\"animation\"></app-player>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_electron__ = __webpack_require__("./node_modules/ngx-electron/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_slider__ = __webpack_require__("./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__music_player_player_component__ = __webpack_require__("./src/app/music/player/player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__music_services_tracks_track_service_service__ = __webpack_require__("./src/app/music/services/tracks/track-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__music_header_header_component__ = __webpack_require__("./src/app/music/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__music_animation_animation_component__ = __webpack_require__("./src/app/music/animation/animation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__music_playlist_playlist_component__ = __webpack_require__("./src/app/music/playlist/playlist.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__music_player_player_component__["a" /* PlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_10__music_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__music_animation_animation_component__["a" /* AnimationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__music_playlist_playlist_component__["a" /* PlaylistComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_electron__["b" /* NgxElectronModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_slider__["a" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatToolbarModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__music_services_tracks_track_service_service__["a" /* TrackService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/music/animation/animation.component.css":
/***/ (function(module, exports) {

module.exports = ".loader-frame {\n    margin-top: 5%;\n    margin-left: 44%;\n    margin-bottom: 50px;\n    width: 90px;\n    height: 90px;\n    position: relative;\n}\n\n.loader1 {\n    position: absolute;\n    border: 5px solid transparent;\n    border-radius: 50%;\n    width: 90px;\n    height: 90px;\n    border-top: 5px solid rgb(103, 31, 238);\n    border-bottom: 5px solid rgb(103, 31, 238);\n    -webkit-animation: clockwisespin 2s linear infinite;\n            animation: clockwisespin 2s linear infinite;\n}\n\n.loader2 {\n    position: absolute;\n    border: 5px solid transparent;\n    border-radius: 50%;\n    width: 80px;\n    height: 80px;\n    border-left: 5px solid darkturquoise;\n    border-right: 5px solid darkturquoise;\n    top: 5px;\n    left: 5px;\n    -webkit-animation: anticlockwisespin 2s linear infinite;\n            animation: anticlockwisespin 2s linear infinite;\n}\n\n@-webkit-keyframes clockwisespin {\n    from {-webkit-transform: rotate(0deg);transform: rotate(0deg);}\n    to {-webkit-transform: rotate(360deg);transform: rotate(360deg);}\n}\n\n@keyframes clockwisespin {\n    from {-webkit-transform: rotate(0deg);transform: rotate(0deg);}\n    to {-webkit-transform: rotate(360deg);transform: rotate(360deg);}\n}\n\n@-webkit-keyframes anticlockwisespin {\n    from {-webkit-transform: rotate(0deg);transform: rotate(0deg);}\n    to {-webkit-transform: rotate(-360deg);transform: rotate(-360deg);}\n}\n\n@keyframes anticlockwisespin {\n    from {-webkit-transform: rotate(0deg);transform: rotate(0deg);}\n    to {-webkit-transform: rotate(-360deg);transform: rotate(-360deg);}\n}"

/***/ }),

/***/ "./src/app/music/animation/animation.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"loader-frame\">\n    <div [class]=\"disp1\"></div>\n    <div [class]=\"disp2\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/music/animation/animation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnimationComponent = /** @class */ (function () {
    function AnimationComponent() {
        var _this = this;
        this.disp1 = "";
        this.disp2 = "";
        this.toggle = function () {
            if (_this.disp1.length > 0) {
                _this.disp1 = "";
                _this.disp2 = "";
            }
            else {
                _this.disp1 = "loader1";
                _this.disp2 = "loader2";
            }
        };
    }
    AnimationComponent.prototype.ngOnInit = function () {
    };
    AnimationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-animation',
            template: __webpack_require__("./src/app/music/animation/animation.component.html"),
            styles: [__webpack_require__("./src/app/music/animation/animation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnimationComponent);
    return AnimationComponent;
}());



/***/ }),

/***/ "./src/app/music/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "\n.example-full-width {\n  width: 80%;\n}\n\nmat-toolbar {\n  -webkit-box-shadow: 3px 5px 16px 0 rgba(0,0,0,0.4);\n          box-shadow: 3px 5px 16px 0 rgba(0,0,0,0.4);\n}\n\n::ng-deep label.mat-input-placeholder {\n  -webkit-transition-duration: 0.8s;\n          transition-duration: 0.8s;\n  color: #fff;  \n  -webkit-text-decoration-color: white;  \n          text-decoration-color: white;\n}\n\n::ng-deep .mat-form-field-underline{\n  background-color: white;\n}\n\n::ng-deep #cdk-overlay-0{\n  width: auto !important;\n}\n\n.example-spacer {\n  -webkit-box-flex: 11;\n      -ms-flex: 11 auto;\n          flex: 11 auto;\n}"

/***/ }),

/***/ "./src/app/music/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n  <span>MUSIC - PLAYER</span>\n  <span class=\"example-fill-remaining-space\"></span>\n  <button mat-button>About</button>\n    <button mat-button>contact</button>\n\n    <button mat-icon-button (click)=\"toggleShowSearch()\">\n      <mat-icon>search</mat-icon>\n    </button>\n    <form class=\"example-form\" *ngIf=\"show\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Search\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let track of filteredTracks | async\" [value]=\"track.trackName\"  (onSelectionChange)=\"songSelected($event, track)\">\n            <span>{{ track.trackName }}</span> \n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>\n  </mat-toolbar-row>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/music/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tracks_track_service_service__ = __webpack_require__("./src/app/music/services/tracks/track-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__player_player_component__ = __webpack_require__("./src/app/music/player/player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_trackService) {
        var _this = this;
        this._trackService = _trackService;
        this.show = false;
        this.tracks = [""];
        this.toggleShowSearch = function () {
            _this.show = !_this.show;
        };
        this.songSelected = function (event, track) {
            console.log(track);
            _this._trackService.changeNextIndex(track.id);
            _this.player.playNext();
        };
        this.stateCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.filteredTracks = this.stateCtrl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (state) { return state ? _this.filterTracks(state) : _this.tracks.slice(); }));
        this.subscription = this._trackService.trackListChange.subscribe(function (value) {
            var trackList = [];
            var recievedObject = value;
            for (var i = 0; i < recievedObject.length; i++) {
                var tempStr = recievedObject[i].file;
                // console.log(tempStr.lastIndexOf('/'))
                var sym = tempStr.lastIndexOf('/');
                console.log(sym);
                tempStr = tempStr.substring(sym + 1);
                trackList.push({ id: recievedObject[i].id, trackName: tempStr });
            }
            _this.tracks = trackList;
            console.log(trackList);
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        console.log("header On init");
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    HeaderComponent.prototype.filterTracks = function (name) {
        return this.tracks.filter(function (track) {
            return track.trackName.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__player_player_component__["a" /* PlayerComponent */])
    ], HeaderComponent.prototype, "player", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/music/header/header.component.html"),
            styles: [__webpack_require__("./src/app/music/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_tracks_track_service_service__["a" /* TrackService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/music/player/player.component.css":
/***/ (function(module, exports) {

module.exports = "/* .playing{\n    font-size: 25px;\n} */\n\n.name{\n    text-align: center;\n    font-size: 16px;\n    font-family: 'Tajawal', sans-serif;\n}\n\n.button-row{\n    margin-left: 22%;\n}\n\n::ng-deep #probar .mat-slider-thumb{\n    border-radius: 10%;\n    width: 0;\n    height: auto;\n    border: none;\n}\n\n.duration{\n    font-size: 15px;\n    font-family: 'Tajawal', sans-serif;\n}\n\n.mat-button-toggle-checked{\n    color: black;\n    background-color: transparent;\n}\n\n.mat-button-toggle-standalone{\n    -webkit-box-shadow: none;\n            box-shadow: none;\n}\n\nmat-grid-list {\n    width: 100%;\n    margin-bottom: -10px;\n}\n\n.bottom-card {\n    min-height: 210px;\n    background: #e9edee;\n    -webkit-box-shadow: 3px 0 16px 2px rgba(0,0,0,0.4);\n            box-shadow: 3px 0 16px 2px rgba(0,0,0,0.4);  \n}\n\n/* ::ng-deep .mat-progress-bar-buffer{\n    background-color: white;\n} */\n\n.bg-trans{\n    background: transparent;\n}\n\n.main-toolbar{\n    margin-top: 60px;\n}\n\n.mat-slider-vol {\n    max-width: 25px;\n}\n\n#cIcon:hover{\n    -webkit-box-shadow: 3px 3px 10px 2px rgba(0,0,0,0.4);\n            box-shadow: 3px 3px 10px 2px rgba(0,0,0,0.4); \n}\n\n.icon-btn{\n    margin-left: 10px;\n}\n\n.prev-btn{\n    margin-left: 10px;\n    margin-right: 10px;\n}\n\n.leftmost {\n    margin-left: 33%;\n}\n\n.vol{\n    margin-left: 35px; margin-top: 1px;\n}\n\n::ng-deep .mat-accent .mat-slider-thumb {\n    background-color: #3a7fb7;\n}\n\n::ng-deep .mat-accent .mat-slider-thumb-label {\n    background-color: #3a7fb7;\n}\n\n::ng-deep .mat-accent .mat-slider-track-fill {\n    background-color:#3a7fb7;\n}\n\n::ng-deep .mat-accent .mat-slider-thumb-label-text{\n    color: white;\n}"

/***/ }),

/***/ "./src/app/music/player/player.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"container name\">{{trackName}}\n  </div>\n  <mat-grid-list cols=\"5\">\n    <mat-grid-tile colspan=\"1\" rowspan=\"1\">\n      <h3 class=\"duration\">{{tDisplay}}</h3>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"3\" rowspan=\"1\">\n      <mat-slider id=\"probar\" style=\"width: 100%\" [value]=\"value\" (input)=\"seekTo($event)\"></mat-slider>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"1\" rowspan=\"1\">\n      <h3 class=\"duration\"> {{tDuration}}</h3>\n    </mat-grid-tile>\n  </mat-grid-list>\n  <div class=\"bottom-card\">\n    <mat-toolbar class=\"bg-trans\">\n      <mat-toolbar-row class=\"bg-trans main-toolbar\">\n\n        <button mat-icon-button class=\"icon-btn leftmost\" (click)=\"stopSong()\">\n          <mat-icon>stop</mat-icon>\n        </button>\n\n        <button mat-icon-button class=\"prev-btn\" (click)=\"playPrev()\">\n          <mat-icon>skip_previous</mat-icon>\n        </button>\n\n        <button id = \"cIcon\" mat-fab color=\"primary\" (click)=\"playPause()\">\n          <mat-icon *ngIf=\"!trackPlaying\">play_arrow</mat-icon>\n          <mat-icon *ngIf=\"trackPlaying\">pause</mat-icon>\n        </button>\n\n        <button mat-icon-button class=\"icon-btn\" (click)=\"playNext()\">\n          <mat-icon>skip_next</mat-icon>\n        </button>\n\n        <mat-button-toggle class=\"icon-btn\" mat-icon-button (click)=\"shuffleclick()\">\n          <mat-icon>shuffle</mat-icon>\n        </mat-button-toggle>\n\n        <button class=\"vol\" mat-icon-button (click)=\"muteVol()\">\n          <mat-icon *ngIf=\"!mute\">volume_up</mat-icon>\n          <mat-icon *ngIf=\"mute\">volume_mute</mat-icon>\n        </button>\n        <mat-slider [disabled]=\"mute\" class=\"mat-slider-vol\" min=\"0\" value=\"70\" thumbLabel tickInterval=\"1\" (input)=\"pitch($event)\"></mat-slider>\n      \n      </mat-toolbar-row>\n    </mat-toolbar>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/music/player/player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tracks_track_service_service__ = __webpack_require__("./src/app/music/services/tracks/track-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animation_animation_component__ = __webpack_require__("./src/app/music/animation/animation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(_trackService) {
        var _this = this;
        this._trackService = _trackService;
        this.tDisplay = '0:00';
        this.tDuration = '0:00';
        this.trackName = "No songs to play";
        this.trackPlaying = false;
        this.trackListVisible = false;
        this.shuffletoggle = false;
        this.mute = false;
        this.seekTo = function (event) {
            _this._trackService.seekTo(event.value);
        };
        this.playPause = function () {
            if (_this.trackPlaying) {
                _this.pauseSong();
            }
            else {
                _this.playSong();
            }
        };
        this.muteVol = function () {
            _this.mute = !_this.mute;
            _this._trackService.volMute();
        };
    }
    ;
    PlayerComponent.prototype.ngOnInit = function () { };
    ;
    PlayerComponent.prototype.pitch = function (event) {
        console.log(event.value);
        this._trackService.setVolume(event.value);
    };
    PlayerComponent.prototype.playSong = function () {
        console.log('Play called');
        var x = this._trackService.play();
        if (x != -1) {
            this.animation.toggle();
            this.trackPlaying = true;
            this.display();
        }
        this.checkSongProgress();
    };
    PlayerComponent.prototype.pauseSong = function () {
        console.log('Pause called');
        this.animation.toggle();
        this._trackService.pause();
        this.trackPlaying = false;
    };
    PlayerComponent.prototype.stopSong = function () {
        console.log('Stop called');
        this._trackService.stop();
        this.trackPlaying = false;
    };
    PlayerComponent.prototype.playNext = function () {
        console.log("Next called");
        if (this.shuffletoggle == true) {
            this.shuffle();
        }
        else {
            var x = this._trackService.next();
            if (x != -1) {
                this.display();
            }
        }
        this.checkSongProgress();
    };
    PlayerComponent.prototype.playPrev = function () {
        console.log("Prev called");
        if (this.shuffletoggle == true) {
            var x = this._trackService.prevshuffle();
            if (x != -1) {
                this.display();
            }
        }
        else {
            var x = this._trackService.prev();
            if (x != -1) {
                this.display();
            }
        }
    };
    PlayerComponent.prototype.shuffleclick = function () {
        console.log("Shuffle is toggled");
        this.shuffletoggle = !this.shuffletoggle;
    };
    PlayerComponent.prototype.shuffle = function () {
        this._trackService.stop();
        console.log("Shuffle called");
        this.trackPlaying = true;
        this._trackService.shuffle();
        this._trackService.play();
        this.display();
    };
    PlayerComponent.prototype.display = function () {
        var _this = this;
        this.trackName = this._trackService.getTrackName();
        this.tDuration = this._trackService.returnTotalDuration();
        setInterval(function () {
            _this.tDisplay = _this._trackService.returnCurrentDuration();
            _this.tDuration = _this._trackService.returnTotalDuration();
            _this.value = _this._trackService.getWidth();
        }, 1000);
    };
    PlayerComponent.prototype.checkSongProgress = function () {
        var _this = this;
        this._trackService.song.on('end', function () {
            console.log("Finished");
            _this.playNext();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__animation_animation_component__["a" /* AnimationComponent */])
    ], PlayerComponent.prototype, "animation", void 0);
    PlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-player',
            template: __webpack_require__("./src/app/music/player/player.component.html"),
            styles: [__webpack_require__("./src/app/music/player/player.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_tracks_track_service_service__["a" /* TrackService */]])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/music/playlist/playlist.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/music/playlist/playlist.component.html":
/***/ (function(module, exports) {

module.exports = "//"

/***/ }),

/***/ "./src/app/music/playlist/playlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlaylistComponent = /** @class */ (function () {
    function PlaylistComponent() {
    }
    PlaylistComponent.prototype.ngOnInit = function () {
    };
    PlaylistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-playlist',
            template: __webpack_require__("./src/app/music/playlist/playlist.component.html"),
            styles: [__webpack_require__("./src/app/music/playlist/playlist.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlaylistComponent);
    return PlaylistComponent;
}());



/***/ }),

/***/ "./src/app/music/services/tracks/track-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_electron__ = __webpack_require__("./node_modules/ngx-electron/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_howler__ = __webpack_require__("./node_modules/howler/dist/howler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_howler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_howler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //I wrote ngx-electron a small package, which wraps all the electron API’s exposed to the renderer process into a single ElectronService


var TrackService = /** @class */ (function () {
    function TrackService(_electronService, appRef) {
        var _this = this;
        this._electronService = _electronService;
        this.appRef = appRef;
        this.trackList = []; //file: && howl :
        this.currentIndex = 0;
        this.trackListChange = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */](); //For the components to be in sync
        this.muted = false;
        this.play = function () {
            if (!_this.trackList.length) {
                console.log("No songs to play");
                var notification = new Notification('sound', {
                    body: 'No songs to play'
                });
                return -1;
            }
            else if (_this.trackList[_this.currentIndex].howl == null) {
                _this.song = _this.trackList[_this.currentIndex].howl = new __WEBPACK_IMPORTED_MODULE_2_howler__["Howl"]({
                    src: [_this.trackList[_this.currentIndex].file],
                    volume: 0.7,
                    mute: false
                });
            }
            else {
                _this.song = _this.trackList[_this.currentIndex].howl;
            }
            _this.song.play();
            return 0;
        };
        this.pause = function () {
            if (_this.song) {
                _this.song.pause();
            }
        };
        this.stop = function () {
            if (_this.song) {
                _this.song.stop();
            }
        };
        this.next = function () {
            if (_this.song) {
                _this.song.stop();
            }
            if (_this.currentIndex >= _this.trackList.length - 1) {
                _this.currentIndex = 0;
            }
            else {
                _this.currentIndex++;
            }
            var x = _this.play();
            return x;
        };
        this.prev = function () {
            if (_this.song) {
                _this.song.stop();
            }
            if (_this.currentIndex <= 0) {
                _this.currentIndex = _this.trackList.length - 1;
            }
            else {
                _this.currentIndex--;
            }
            var x = _this.play();
            return x;
        };
        this.prevshuffle = function () {
            if (_this.song) {
                _this.song.stop();
            }
            _this.currentIndex = _this.prevIndex;
            var x = _this.play();
            return x;
        };
        this.shuffle = function () {
            _this.prevIndex = _this.currentIndex;
            _this.currentIndex = Math.floor(Math.random() * _this.trackList.length);
        };
        this.volMute = function () {
            if (!_this.muted) {
                _this.song.mute(true);
            }
            else {
                _this.song.mute(false);
            }
            _this.muted = !_this.muted;
        };
        this.formatTime = function (secs) {
            var minutes = Math.floor(secs / 60) || 0;
            var seconds = Math.trunc((secs - minutes * 60)) || 0;
            return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        };
        this.returnTotalDuration = function () {
            return _this.formatTime(_this.song.duration());
        };
        this.returnCurrentDuration = function () {
            return _this.formatTime(_this.song.seek());
        };
        this.getTrackName = function () {
            var sym = (_this.trackList[_this.currentIndex].file).lastIndexOf('/');
            return (_this.trackList[_this.currentIndex].file).slice(sym + 1, -4);
        };
        this.getWidth = function () {
            var x = _this.song.seek();
            x = Math.floor((x / _this.song.duration() || 0) * 100);
            return x;
        };
        this.setVolume = function (volvalue) {
            Howler.volume(volvalue / 100);
        };
        this.seekTo = function (percentage) {
            _this.song.seek(percentage * _this.song.duration() / 100);
        };
        this.changeNextIndex = function (selectedId) {
            //Linear search
            //assuming that id and index number will be same
            for (var i = 0; i < _this.trackList.length; i++) {
                if (selectedId == _this.trackList[i].id) {
                    _this.currentIndex = selectedId - 1;
                    break;
                }
            }
        };
        var ipc = this._electronService.ipcRenderer;
        //recieve contents from win.webcontents() via ipcRenderer//this thing is really important to get file from render process
        // mp3-file are getting from main.js file( line number 105)
        ipc.on('mp3-file', function (event, arg) {
            console.log(arg);
            for (var i = 0; i < arg.length; i++) {
                _this.trackList.push({ id: i, file: arg[i], howl: null });
            }
            _this.trackListChange.next(_this.trackList); //For the components to be in sync
            var notification = new Notification('music player', {
                body: 'Songs Added. Play Now'
            });
            _this.appRef.tick();
        });
    }
    TrackService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_electron__["a" /* ElectronService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], TrackService);
    return TrackService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map