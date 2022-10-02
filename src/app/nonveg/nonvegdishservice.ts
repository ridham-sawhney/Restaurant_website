import { Injectable } from "@angular/core";

@Injectable()


export class nonvegdish{
nonvegdish()
{
    return [
        {"name":"Chilli Chicken","image":"/assets/nonveg/chillichicken.jpg","price":180 },
        {"name":"Chicken Kabbab","image":"/assets/nonveg/chickenkabbab.jpg","price":120},
        {"name":"Chicken ChowMein","image":"/assets/nonveg/chickenchowmein.jpg","price":90},
        {"name":"Chicken Manchurian","image":"/assets/nonveg/chickenmanchurian.jpg","price":170},
        {"name":"Chicken Shawarma","image":"/assets/nonveg/Chickenshawarma.jpg","price":100},
        {"name":"Chicken strips","image":"/assets/nonveg/chickenstrips.jpg","price":140},
         {"name":"Chicken Kurkure","image":"/assets/nonveg/chickenkurkure.webp","price":160},
        {"name":"Chicken Momos","image":"/assets/nonveg/chickenmomos.jpg","price":80},
        

    ]
}

}