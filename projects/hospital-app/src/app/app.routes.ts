import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadChildren:() => import('./layout/auth.routes').then(m => m.routes)
    },
    {
        path:'main',
        loadChildren:() => import('./layout/main.routes').then(m => m.routes)
    }
];
