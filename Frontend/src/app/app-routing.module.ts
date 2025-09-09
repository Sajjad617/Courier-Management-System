// Angular Import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// project import
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { Home } from './Home/home/home';
import { Nav } from './Home/nav/nav';
import { Service } from './Home/service/service';
import { CustomerComment } from './Home/customer-comment/customer-comment';
import { Contact } from './Home/contact/contact';
import { Footer } from './Home/footer/footer';
import { HowItWorks } from './Home/how-it-works/how-it-works';
import { Login } from './Home/login/login';
import { Signup } from './Home/signup/signup';
import { NewParcel } from './Components/new-parcel/new-parcel';
import { AllParcel } from './Components/Parcel/all-parcel/all-parcel';
import { Delivered } from './Components/Parcel/delivered/delivered';
import { InTransit } from './Components/Parcel/in-transit/in-transit';
import { Pending } from './Components/Parcel/pending/pending';
import { Picked } from './Components/Parcel/picked/picked';
import { Returned } from './Components/Parcel/returned/returned';
import { Area } from './Components/Location/area/area';
import { City } from './Components/Location/city/city';
import { Zonee } from './Components/Location/zonee/zonee';
import { CreateStore } from './Components/Store/create-store/create-store';
import { StoreAllData } from './Components/Store/store-all-data/store-all-data';
import { Marcent } from './Components/admin/Marcent/marcentStatus/marcent';
import { CreateMarcent } from './Components/admin/Marcent/create-marcent/create-marcent';
import { Confirm } from './Components/Parcel/confirm/confirm';
import { ReturnBack } from './Components/Parcel/return-back/return-back';
import { MarcentView } from './Components/admin/Marcent/marcent-view/marcent-view';
import { PricingPlanForm } from './Components/admin/PricingPlan/pricing-plan-form/pricing-plan-form';
import { PricingPlanTbl } from './Components/admin/PricingPlan/pricing-plan-tbl/pricing-plan-tbl';
// import { CreateStore } from './Components/create-store/create-store';

const routes: Routes = [
{
    path:'',
    component:Nav,
    children: [
      {
        path:'',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'contact',
        component: Contact
      },
      {
        path: 'Customer_Comment',
        component: CustomerComment
      },
      {
        path: 'footer',
        component: Footer
      },
      {
        path: 'home',
        component:Home
      },
      {
        path: 'how_it_word',
        component: HowItWorks
      },
      {
        path: 'login',
        component: Login
      },
      {
        path: 'service',
        component: Service
      },
      {
        path: 'signup',
        component: Signup
      }
    ]
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/analytics',
        pathMatch: 'full'
      },
      {
        path: 'analytics',
        loadComponent: () => import('./demo/dashboard/dash-analytics.component').then((c) => c.DashAnalyticsComponent)
      },
      {
        path: 'component',
        loadChildren: () => import('./demo/ui-element/ui-basic.module').then((m) => m.UiBasicModule)
      },
      {
        path: 'chart',
        loadComponent: () => import('./demo/chart-maps/core-apex.component').then((c) => c.CoreApexComponent)
      },
      {
        path: 'forms',
        loadComponent: () => import('./demo/forms/form-elements/form-elements.component').then((c) => c.FormElementsComponent)
      },
      {
        path: 'tables',
        loadComponent: () => import('./demo/tables/tbl-bootstrap/tbl-bootstrap.component').then((c) => c.TblBootstrapComponent)
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/other/sample-page/sample-page.component').then((c) => c.SamplePageComponent)
      },
      //  Admin Panel
      {
        path: 'marcent',
        component: Marcent
      },
      {
        path: 'Create-New-Marcant',
        component: CreateMarcent
      },
      {
        path: 'Marcent-view',
        component: MarcentView
      },
      {
        path: 'pricing-plan-form',
        component: PricingPlanForm
      },
      {
        path: 'pricing-plan-tbl',
        component: PricingPlanTbl
      },
      // Component(Marcent)
      {
        path: 'Create-New-Parcel',
        component: NewParcel
      },
      {
        path: 'all-parcel',
        component: AllParcel
      },
      {
        path: 'confirm',
        component: Confirm
      },
      {
        path: 'delivered',
        component: Delivered
      },
      {
        path: 'in-transit',
        component: InTransit
      },
      {
        path: 'pending',
        component: Pending
      },
      {
        path: 'picked',
        component:Picked
      },
      {
        path: 'return-back',
        component: ReturnBack
      },
      {
        path: 'returned',
        component:Returned
      },
      {
        path: 'area',
        component: Area
      },
      {
        path: 'city',
        component: City
      },
      {
        path: 'zonee',
        component: Zonee
      },
      {
        path: 'create-store',
        component: CreateStore
      },
      {
        path: 'Store-All-Data',
        component: StoreAllData
      }
    ]
  },
  {

    path: 'Administrator',
    component: GuestComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./demo/pages/authentication/sign-up/sign-up.component').then((c) => c.SignUpComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./demo/pages/authentication/sign-in/sign-in.component').then((c) => c.SignInComponent)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule {}
