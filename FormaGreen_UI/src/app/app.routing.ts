import { Routes, RouterModule } from '@angular/router';

import {memberComponent} from "./member";
import {greenAreaComponent} from "./greenArea/greenArea.component";
import {mapComponent} from "./map/map.component";
import {homeComponent} from "./home/home.component";


const routes: Routes = [
  { path: 'member', component: memberComponent },
  {path: 'greenArea', component: greenAreaComponent},
  {path: 'map', component: mapComponent},
  {path: '', component: homeComponent}




];

export const appRoutingModule = RouterModule.forRoot(routes);
