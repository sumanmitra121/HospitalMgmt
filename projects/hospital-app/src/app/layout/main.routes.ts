import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent:() => import('../pages/main/main.component').then(m => m.MainComponent),
        children:[
            {
                path:'',
                loadComponent:() => import('../pages/main/dummy-dashboard/dummy-dashboard.component').then(m => m.DummyDashboardComponent)
            }
        ]
    }
];
