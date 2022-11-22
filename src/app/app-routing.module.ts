import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './loading/loading.component';



const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
	{ path: 'admin', component: LoadingComponent },
	{ path: 'home-sec', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'blog', component: BlogComponent },
	{ path: 'footer', component: FooterComponent },
	{ path: 'header', component: HeaderComponent },
	{path:'**', component:HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
