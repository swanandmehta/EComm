import { JournalImg } from '../JournalImg/journal-img';

export class JournalEntry {
    id: number;
    title: string;
    img: JournalImg;
    text: string;

    constructor(id: number, title: string, img: JournalImg, text: string) {
        this.id = id;
        this.title = title;
        this.img = img;
        if (text.length > 500) {
            this.text = text.substr(0, 500) + "...";
        } else {
            this.text = text + "...";
        }

    }
}
