"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var userlist_service_1 = require('./userlist.service');
var core_1 = require('@angular/core');
var UserList = (function () {
    function UserList(userlist) {
        this.title = "Hello World";
        this.users = userlist.getUsers();
    }
    UserList = __decorate([
        core_1.Component({
            selector: 'users',
            template: "<h3>{{ title }}</h3>\n    <ul>\n<li *ngFor=\"let user of users\">{{user.name}}</li>\n    </ul>\n    ",
            providers: [userlist_service_1.UserListService]
        }), 
        __metadata('design:paramtypes', [userlist_service_1.UserListService])
    ], UserList);
    return UserList;
}());
exports.UserList = UserList;
//# sourceMappingURL=userlist.component.js.map