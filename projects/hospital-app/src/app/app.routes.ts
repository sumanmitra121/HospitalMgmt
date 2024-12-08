import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
export const routes: Routes = [
    {
        path:'',
        loadChildren:() => import('./layout/auth.routes').then(m => m.routes)
    },
    {
        path:'main',
        loadChildren:() => import('./layout/main.routes').then(m => m.routes)
    },
    {
        path:'outlet',
        loadComponent:() => import('./pages/outlet/outlet.component').then(m => m.OutletComponent)
    },
    
    /****** Process 1: Egar Loading Of Fedaration 
     *  Need to set RemoteEntry.js in webpack.config.js
     */
    
    // {
    //     path:'library-management',
    //     loadComponent:() => import('libraryMgMt/Component').then(m=>m.AppComponent)
    // }
    
    /*****  End ***********************************/


    /*******Process 2: Dynamic Federation 
     *  
     * No Need to set remoteEntry.js file in webpack.config.js
     * 
     * *****/
    {
        path: 'library-management',
        loadComponent: () =>
             loadRemoteModule({
                type: 'module',
                remoteEntry: 'http://localhost:4300/remoteEntry.js',
                exposedModule: './Component'
            })
            .then(m => m.AppComponent)
    },
    /****** End */

    /*******Process 2: Dynamic Federation  
     * Applicable when using Manifest.json 
     * */
    // {
    //     path: 'library-management',
    //     loadComponent: () =>
    //          loadRemoteModule({
    //             type: 'manifest',
    //             remoteName: 'libraryMgMt',
    //             exposedModule: './Component'
    //         })
    //         .then(m => m.AppComponent)
    // },
    /***** End */
];
