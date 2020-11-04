import { SocialType } from '../../enum/social-type';

export class ProductSocial {
    type: SocialType;
    link: string;

    constructor(type: SocialType, link: string){
        this.type = type;
        this.link = link;
    }
}
