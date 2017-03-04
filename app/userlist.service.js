"use strict";
var UserListService = (function () {
    function UserListService() {
    }
    UserListService.prototype.getUsers = function () {
        return [
            {
                name: "stefan"
            },
            {
                name: "hans"
            }
        ];
    };
    return UserListService;
}());
exports.UserListService = UserListService;
//# sourceMappingURL=userlist.service.js.map