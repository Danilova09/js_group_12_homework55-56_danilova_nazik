import {Component} from '@angular/core';


@Component({
  selector: 'app-ingredients-block',
  templateUrl: './ingredients-block.component.html',
  styleUrls: ['./ingredients-block.component.css']
})
export class IngredientsBlockComponent {

  price: number = 20;

  ingredients = [
    {
      name: 'meat',
      imgUrl: 'https://st.depositphotos.com/1818031/2247/i/950/depositphotos_22478427-stock-photo-hamburger.jpg',
      count: 0,
      price: 50,
      total: 0
    },
    {
      name: 'cheese',
      imgUrl: 'https://st.depositphotos.com/1588534/2126/i/950/depositphotos_21263777-stock-photo-cheese.jpg',
      count: 0,
      price: 20,
      total: 0
    },
    {
      name: 'salad',
      imgUrl: 'https://st.depositphotos.com/2524151/4174/i/950/depositphotos_41741249-stock-photo-cos-vegetable.jpg',
      count: 0,
      price: 5,
      total: 0
    },
    {
      name: 'bacon',
      imgUrl: 'https://st.depositphotos.com/2075507/3046/i/950/depositphotos_30467113-stock-photo-bacon-slices.jpg',
      count: 0,
      price: 30,
      total: 0
    },
  ];

  addItem(index: number) {
    this.ingredients[index].count += 1;
    this.ingredients[index].total =  this.ingredients[index].count * this.ingredients[index].price;
  }

  deleteItem(index: number) {
    if (this.ingredients[index].count !== 0) {
      this.ingredients[index].count -= 1;
      this.ingredients[index].total =  this.ingredients[index].count * this.ingredients[index].price;
    }
  }

  getPrice() {
    this.price = 20;
    this.ingredients.forEach(element => {
      this.price += element.total;
    });
  }

}
