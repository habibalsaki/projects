"use strict";
var auth_guard_service_1 = require('./auth-guard.service');
var photo_details_component_1 = require('./photos/photo-details.component');
var not_found_component_1 = require('./not-found.component');
var photos_component_1 = require('./photos/photos.component');
var messages_component_1 = require('./messages/messages.component');
var home_component_1 = require('./home.component');
var router_1 = require('@angular/router');
exports.routing = router_1.RouterModule.forRoot([
    { path: "", component: home_component_1.HomeComponent },
    { path: "messages", component: messages_component_1.MessagesComponent, canActivate: [auth_guard_service_1.AuthGurad] },
    { path: "photos/:id", component: photo_details_component_1.PhotoDetailsComponent },
    { path: "photos", component: photos_component_1.PhotosComponent },
    { path: "**", component: not_found_component_1.NotFoundComponent }
]);
//# sourceMappingURL=app.routing.js.map