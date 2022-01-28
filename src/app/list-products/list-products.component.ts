import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor() { }

  Product_List:any = ["Sony","Samsung","Lenovo","LG"];

  error_msg : string = "Toggle";

  addProducts(productname:string)
  {
    this.Product_List.push(productname);
    this.error_msg = "Toggle";
  }
  Toggle_enable(productValue:string)
  {
      this.error_msg = "";
  
  }

  ngOnInit(): void {
  }

}
