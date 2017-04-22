"use strict";
var preventNavigation_service_1 = require('./../preventNavigation.service');
var photo_details_component_1 = require('./photo-details.component');
var photos_component_1 = require('./photos.component');
var router_1 = require('@angular/router');
exports.routing = router_1.RouterModule.forChild([
    { path: "photos/:id", component: photo_details_component_1.PhotoDetailsComponent },
    { path: "photos", component: photos_component_1.PhotosComponent, canDeactivate: [preventNavigation_service_1.PreventNavigation] }
]);
//# sourceMappingURL=photos.routing.js.map