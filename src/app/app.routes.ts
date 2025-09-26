import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserComponent } from './user/user.component';
import { SubjectExampleComponent } from './subject/subject-example/subject-example.component';
import { StudentComponent } from './student/student.component';

export const routes: Routes = [
        {path:"", redirectTo:'add-employee', pathMatch:'full'},
        { path: "add-employee", component: AddEmployeeComponent },
        {path:"user-info",component:UserInfoComponent},
        {path:"user/:id",component:UserComponent},
        {path: "student",component:StudentComponent},
        {path:'subject', component:SubjectExampleComponent}
];
