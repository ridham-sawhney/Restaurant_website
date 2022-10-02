import { Injectable } from "@angular/core";

@Injectable()


export class beverages{
beverages()
{
    return [
        {"name":"Hot Coffee","image":"/assets/beverages/coffee.jpg","price":40},
        {"name":"Cold Coffee","image":"/assets/beverages/coldcoffee.jpg","price":60},
        {"name":"Classic Mojito","image":"/assets/beverages/classicmojito.jpg","price":90},
        {"name":"Coke","image":"/assets/beverages/coke.jpg","price":40},
        {"name":"Watermelon Mojito","image":"/assets/beverages/watermelonmojito.jpg","price":100},
        {"name":"Water","image":"/assets/beverages/water.jpg","price":20},
         

    ]
}

}