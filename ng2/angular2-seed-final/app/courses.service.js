"use strict";
var CoursesService = (function () {
    function CoursesService() {
    }
    CoursesService.prototype.getCourses = function () {
        return ["course1", "couse2", "course3"];
    };
    return CoursesService;
}());
exports.CoursesService = CoursesService;
//# sourceMappingURL=courses.service.js.map