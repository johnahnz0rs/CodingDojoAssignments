import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
    @Input() myTasks: Task[];
    @Output() aTaskEventEmitter = new EventEmitter();
    constructor() { }

    ngOnInit() {
    }
    triggerEvent() {
        this.aTaskEventEmitter.emit(7);
    }
}
