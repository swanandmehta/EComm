import { Social } from '../../enum/social';

export class JournalSocial {
    type: Social;
    link: string;

    constructor(type: Social, link: string){
        this.type = type;
        this.link = link;
    }
}
