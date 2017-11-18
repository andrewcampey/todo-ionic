import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodoTask } from '../../../node_modules/todo-package/models/todotask';
import { TodoDetailPage } from '../todo-detail/todo-detail';
import { TODOTASKS } from '../../../node_modules/todo-package/models/todotask';
import { TodosService } from '../../../node_modules/todo-package/services/todos.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  todos: TodoTask[];

  constructor(public navCtrl: NavController, public _todoTasksService: TodosService) {
    this.todos = _todoTasksService.readTasks();
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
