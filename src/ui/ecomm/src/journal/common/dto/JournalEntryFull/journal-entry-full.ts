import { JournalImg } from '../JournalImg/journal-img';
import { JournalSocial } from '../JournalSocial/journal-social';
import { JournalSource } from '../JournalSource/journal-source';

export class JournalEntryFull {
    id: number;
    title: string;
    img: JournalImg;
    text: string;
    author: string;
    date: string;
    source?: JournalSource = null;
    social: JournalSocial[];

    constructor(id: number, title: string, img: JournalImg, text: string, author: string, date: string, social: JournalSocial[]) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.author = author;
        this.date = date;
        this.social = social;
        this.img = img;
    }
}
