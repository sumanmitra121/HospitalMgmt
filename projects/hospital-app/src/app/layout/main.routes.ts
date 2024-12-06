import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent:() => import('../pages/main/main.component').then(m => m.MainComponent),
        children:[
            {
                path:'',
                pathMatch:'full',
                redirectTo:'home'
            },
            {
                path:'home',
                loadComponent:() => import('../pages/main/dummy-dashboard/dummy-dashboard.component').then(m => m.DummyDashboardComponent)
            },
            {
                path:'patient',
                loadComponent:() => import('../pages/main/dummy-list/dummy-list.component').then(m => m.DummyListComponent)
            }
        ]
    }
];
