import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-ingredients-items',
  templateUrl: './ingredients-items.component.html',
  styleUrls: ['./ingredients-items.component.css']
})
export class IngredientsItemsComponent {
  @Input() imgUrl = '';
  @Input() title = '';
  @Input() count = 0;
  @Output() add = new EventEmitter();
  @Output() delete = new EventEmitter();

  addItem() {
    this.add.emit();
  }

  deleteItem() {
    this.delete.emit();
  }

}
