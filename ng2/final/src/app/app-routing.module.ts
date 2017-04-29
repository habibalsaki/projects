import { HasUnsavedData } from './guards/hasUnsavedData.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import {NgModule} from '@angular/core';
import { RouterModule, Route, CanDeactivate } from '@angular/router';

import {UserComponent} from './user/user.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import {PostComponent} from './post/post.component';


const routes: Route[] = [
    {path: 'user', component: UserComponent},
    {path: 'user/create', component: CreateUserComponent, canDeactivate: [HasUnsavedData]},
    {path: 'post', component: PostComponent},
    {path: '', component: HomeComponent},
    {path: '**', component: NotFoundComponent}
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}
