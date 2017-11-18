import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodoTask } from '../../../node_modules/todo-package';
import { TodoDetailPage } from '../todo-detail/todo-detail';
import { TODOTASKS } from '../../../node_modules/todo-package';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  todos: TodoTask[];

  constructor(public navCtrl: NavController) {
    this.todos = TODOTASKS;
    console.log("todo tasks" + TODOTASKS);
  }

  itemSelected(todotask: TodoTask, isUpdate: boolean)
  {
    this.navCtrl.push(TodoDetailPage, {
      todoTask: todotask,
      isUpdate: isUpdate
    }
    );
  }

}
