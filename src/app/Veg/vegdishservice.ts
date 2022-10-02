import { Injectable } from "@angular/core";

@Injectable()


export class dish{
dish()
{
    return [
        {"name":"Chilli Paneer","image":"/assets/veg/chilipaneer.jpg","price":180},
        {"name":"Chilli Potato","image":"/assets/veg/chillipotato.jpeg","price":120},
        {"name":"ChowMein","image":"/assets/veg/ChowMein.png","price":90},
        {"name":"Manchurian","image":"/assets/veg/Manchurian.jpg","price":170},
        {"name":"Paneer Shawarma","image":"/assets/veg/paneershawarma.jpg","price":100},
        {"name":"Paneer strips","image":"/assets/veg/paneerstrip.jpg","price":140},
        {"name":"Red Sauce Pasta","image":"/assets/veg/redsaucepasta.jpg","price":160},
        {"name":"Veg Momos","image":"/assets/veg/VegMomos.jpg","price":"80"},
        {"name":"White Sauce Pasta","image":"/assets/veg/Whitesaucepasta.jpg","price":160},

    ]
}

}