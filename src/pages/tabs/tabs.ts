import { Component } from '@angular/core';

import { CameraPage } from '../camera/camera';
import { HomePage } from '../home/home';
import { TodosPage } from '../todos/todos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TodosPage;
  tab3Root = CameraPage;

  constructor() {

  }
}
