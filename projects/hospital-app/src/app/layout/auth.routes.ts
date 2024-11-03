import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent:() => import('../pages/authentication/authentication.component').then(m => m.AuthenticationComponent),
        children:[
            {
                path:'',
                loadComponent:() => import('../pages/authentication/sign-in/sign-in.component').then(m => m.SignInComponent)
            }
        ]
    }
];
