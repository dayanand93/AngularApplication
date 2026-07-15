import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserComponent } from './user/user.component';
import { SubjectExampleComponent } from './subject/subject-example/subject-example.component';
import { StudentComponent } from './student/student.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { authsGuard } from './gaurds/auths.guard';
import { ParentComponent } from './parent/parent.component';
import { LayoutComponent } from './layout/layout.component';
import { ResolvescomComponent } from './resolvescom/resolvescom.component';
import { resolveGuard } from './gaurds/resolve.guard';
import { preventBackButtonGuard } from './prevent-back-button.guard';
import { ParallelapicallComponent } from './parallelapicall/parallelapicall.component';

export const routes: Routes = 
[
         {path:"", redirectTo :'login',pathMatch:'full'},
         {path:"login",component:LoginComponent},
         {path:"layout",component:LayoutComponent,
            children:[
               {path:"profile", component:ProfileComponent},
         {path:"add-employee", component:AddEmployeeComponent,title:'Add Employee', canActivate:[authsGuard],
          resolve:{data:resolveGuard}
         },
         {path:"resolvescom",component:ResolvescomComponent,
           // loadComponent:()=>import('./resolvescom/resolvescom.component').then(m=>m.ResolvescomComponent),
         title:'Resolve Component',resolve:{data:resolveGuard}
         },
       {path:"header", component:LoginComponent},
         {path:"", redirectTo:'add-employee', pathMatch:'full'},
        //{ path: "add-employee", component: AddEmployeeComponent },
       {path:"user-info",component:UserInfoComponent,title:'User Info',canDeactivate:[preventBackButtonGuard]},
        {path:"user/:id",component:UserComponent},// 
        // "user/:id", this is a route parameter, it is used to pass data from one component to another component using routerLink directive
        {path:"user",component:UserComponent},
        {path: "student",component:StudentComponent},
        {path:"parent", component:ParentComponent},        
        {path:'subject', component:SubjectExampleComponent,title:'Subject Example'},
        {path:'parallelapicall',component:ParallelapicallComponent},
            ]
         },
       
];
