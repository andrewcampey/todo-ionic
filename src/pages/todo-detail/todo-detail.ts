import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoTask } from 'todo-package';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

}
