// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
// components
import { AppComponent } from './app.component';

//routes
import { appRoutes } from './routes';


import { UserService } from './shared/user.service';
//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { StudentSigninComponent } from './student-signin/student-signin.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentEnrollmentComponent } from './student-enrollment/student-enrollment.component';
import { MyHomeStudComponent } from './my-home-stud/my-home-stud.component';
import { EditmyHomeStudComponent } from './editmy-home-stud/editmy-home-stud.component';
import { MyHomeStudProfileComponent } from './my-home-stud-profile/my-home-stud-profile.component';
import { HomeComponent } from './home/home.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { CoursesComponent } from './courses/courses.component';
import { FeaturesComponent } from './features/features.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminStudentComponent } from './admin-student/admin-student.component';
import { AdminUpdatestudentComponent } from './admin-updatestudent/admin-updatestudent.component';
import { Header2Component } from './header2/header2.component';
import { Header3Component } from './header3/header3.component';
import { AdminComponent } from './admin/admin.component';
import { Adminheader2Component } from './adminheader2/adminheader2.component';
import { Adminhome1Component } from './adminhome1/adminhome1.component';
import { FooterComponent } from './footer/footer.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { EmployerComponent } from './employer/employer.component';
import { StudSearchComponent } from './stud-search/stud-search.component';
// import { NgxPaginationModule} from "ngx-pagination"
import { Ng2SearchPipeModule} from "ng2-search-filter";
import { EmployerloginComponent } from './employerlogin/employerlogin.component';
import { EmployersignupComponent } from './employersignup/employersignup.component';
import { AdminViewEmpComponent } from './admin-view-emp/admin-view-emp.component';
import { Adminheader3Component } from './adminheader3/adminheader3.component';
import { EmployersearchComponent } from './employersearch/employersearch.component';
import { EnrollmentformComponent } from './enrollmentform/enrollmentform.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentSignupComponent,
    StudentSigninComponent,
    StudentProfileComponent,
    StudentEnrollmentComponent,
    MyHomeStudComponent,
    EditmyHomeStudComponent,
    MyHomeStudProfileComponent,
    HomeComponent,
    HomeMainComponent,
    CoursesComponent,
    FeaturesComponent,
    AboutusComponent,
    AdminStudentComponent,
    AdminUpdatestudentComponent,
    Header2Component,
    Header3Component,
    AdminComponent,
    Adminheader2Component,
    Adminhome1Component,
    FooterComponent,
    AdminloginComponent,
    AdminhomeComponent,
    EmployerComponent,
    StudSearchComponent,
    EmployerloginComponent,
    EmployersignupComponent,
    AdminViewEmpComponent,
    Adminheader3Component,
    EmployersearchComponent,
    EnrollmentformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,Ng2SearchPipeModule
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
