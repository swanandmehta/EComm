import { SubCategoryOption } from '../SubCategoryOption/sub-category-option';

export class MainCategoryOption {
    link: string = "";
    text: string = "";
    showSubCategoryOption: boolean = false;
    subCategory: Array<SubCategoryOption> = [];
    
    constructor(link: string, text: string, showSubCategoryOption: boolean, subCategory: Array<SubCategoryOption>){
        this.link = link;
        this.text = text;
        this.showSubCategoryOption = showSubCategoryOption;
        this.subCategory = subCategory;
    }
}
