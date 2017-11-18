import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoTask } from '../../../node_modules/todo-package/models/todotask';
import { TodosService } from '../../../node_modules/todo-package/services/todos.service';


/**
 * Generated class for the TodoDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todo-detail',
  templateUrl: 'todo-detail.html',
})
export class TodoDetailPage {

  todoTask: TodoTask;
  isUpdate: boolean;
  tasktitle: string;
  buttontext: string;

  newTask: string;
  geoLocation: string;
  email: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _todoTasksService: TodosService) {
    this.todoTask = navParams.get("todoTask");
    this.isUpdate = navParams.get("isUpdate");

    if (this.isUpdate) {
      this.tasktitle = this.todoTask.newTask;
      this.buttontext = "Update";
    } else {
      this.tasktitle = "New Task";
      this.buttontext = "Create";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoDetailPage');
  }

  createupdateclick() {
    if (this.isUpdate) {
      this.todoTask.newTask = this.newTask;
      this.todoTask.email = this.email;
      this.todoTask.geolocation = this.geoLocation;
      this._todoTasksService.updateTask(this.todoTask);
    }
    else {
      const newTodoTask = new TodoTask({taskID: 555, 
                                        newTask: this.newTask,
                                        email: this.email,
                                        geolocation: this.geoLocation 
       });
      
    }
  }

  deleteclick() {
      this._todoTasksService.deleteTask(this.todoTask);
  }

}
