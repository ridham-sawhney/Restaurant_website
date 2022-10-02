import { Injectable } from "@angular/core";

@Injectable()

export class images{

    images1()
    {
        return[
            {"image":"assets/categoryimages/momos1.jpg","desc":"Fall In LOve with The Momos"},
            {"image":"assets/categoryimages/legchicken1.jpg","desc":"Never say NO to Chicken"},
            {"image":"assets/categoryimages/sandwich1.jpg","desc":"Life is better with sandWich"},
            {"image":"assets/categoryimages/shawarma.jpg","desc":"Love at first Bite"}

        ]
    }

    images2()
    {
        return[
            {"image":"assets/categoryimages/pasta.jpg","desc":"Naughty Friends result to Full Masti"},
            {"image":"assets/categoryimages/momos3.jpg","desc":"Never say NO to Chicken"},
            {"image":"assets/categoryimages/sandwich2.jpg","desc":"Made With Love"},
            {"image":"assets/categoryimages/legchicken2.jpg","desc":"Love at first Bite"}

             ]
    }
}