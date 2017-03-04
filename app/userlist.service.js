"use strict";
class UserListService {
    getUsers() {
        return new Promise((resolve, reject) => {
            resolve([]);
        });
    }
}
exports.UserListService = UserListService;
(function (Permission) {
    Permission[Permission["AddUser"] = 0] = "AddUser";
    Permission[Permission["DeleteUser"] = 1] = "DeleteUser";
    Permission[Permission["ChangeUser"] = 2] = "ChangeUser";
    Permission[Permission["AddItem"] = 4] = "AddItem";
    Permission[Permission["DeleteItem"] = 8] = "DeleteItem";
    Permission[Permission["ChangeItem"] = 16] = "ChangeItem";
    Permission[Permission["ChangeApplicationSettings"] = 32] = "ChangeApplicationSettings";
    Permission[Permission["PayIn"] = 64] = "PayIn";
    Permission[Permission["PayOut"] = 128] = "PayOut";
    Permission[Permission["LogIn"] = 256] = "LogIn";
})(exports.Permission || (exports.Permission = {}));
var Permission = exports.Permission;
//# sourceMappingURL=userlist.service.js.map