import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { StudentSigninComponent } from './student-signin/student-signin.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentEnrollmentComponent } from './student-enrollment/student-enrollment.component';
import { MyHomeStudComponent } from './my-home-stud/my-home-stud.component';
import { MyHomeStudProfileComponent } from './my-home-stud-profile/my-home-stud-profile.component';
import { EditmyHomeStudComponent } from './editmy-home-stud/editmy-home-stud.component';
import { HomeComponent } from './home/home.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { CoursesComponent } from './courses/courses.component';
import { FeaturesComponent } from './features/features.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminStudentComponent } from './admin-student/admin-student.component';
import { AdminUpdatestudentComponent } from './admin-updatestudent/admin-updatestudent.component';
import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { StudSearchComponent } from './stud-search/stud-search.component';
import { EmployerComponent } from './employer/employer.component';
import { EmployerloginComponent } from './employerlogin/employerlogin.component';
import { EmployersignupComponent } from './employersignup/employersignup.component';
import { AdminViewEmpComponent } from './admin-view-emp/admin-view-emp.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';


export const appRoutes: Routes = [
    // {path:'',component:StudentSignupComponent},
    {path:'',component:HomeComponent,
    children:[{path:'',component:HomeMainComponent},
              {path:'courses',component:CoursesComponent},
              {path:'features',component:FeaturesComponent},
              {path:'aboutus',component:AboutusComponent}]},
    {path:'studentsignin',component:StudentSigninComponent},
    {path:'studentsignup',component:StudentSignupComponent},
    {path:'studentprofile',component:StudentProfileComponent,canActivate:[AuthGuard],
    children:[{path:'',component:MyHomeStudComponent,canActivate:[AuthGuard]},
              {path:'myhome',component:MyHomeStudComponent,canActivate:[AuthGuard]},
              {path:'myhomeprofile',component:MyHomeStudProfileComponent,canActivate:[AuthGuard]},
              {path:'myhomeedit',component:EditmyHomeStudComponent,canActivate:[AuthGuard]}]},
    { path: 'enroll', component: StudentEnrollmentComponent,canActivate:[AuthGuard] },
    {path:'admin',component:AdminComponent,
     children:[{path:'',component:AdminloginComponent}]},
    {path:'adminmenu',component:AdminhomeComponent},
    
    {path:'adminhome',component:AdminStudentComponent},
    {path:'viewdetails',component:AdminUpdatestudentComponent},
    {path:'searchstud',component:StudSearchComponent},
    {path:'employer',component:EmployerloginComponent},
    {path:'employersignin',component:EmployerloginComponent},
    {path:'employersignup',component:EmployersignupComponent},
    {path:'viewemp',component:AdminViewEmpComponent}
               

   
];