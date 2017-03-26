import {Router, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {PostComponent} from './post/post.component';

export const routing = RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'users', component: UserComponent},
    {path: 'posts', component: PostComponent},
    {path: '**',component: HomeComponent}
])