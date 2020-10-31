import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export class SocialOption {
    link: string = "";
    icon: IconDefinition = null;

    constructor(link:string, icon: IconDefinition){
        this.link = link;
        this.icon = icon;
    }
}
