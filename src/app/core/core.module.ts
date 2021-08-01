import { RouterModule } from '@angular/router';
import { NavBarComponent } from './components/navbar/nav-bar.component';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule {

}
