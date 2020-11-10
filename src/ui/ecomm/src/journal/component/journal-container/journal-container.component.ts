import { Component, OnInit } from '@angular/core';
import { JournalEntry } from 'src/journal/common/dto/JournalEntry/journal-entry';
import { JournalImg } from 'src/journal/common/dto/JournalImg/journal-img';
import { JournalSocial } from 'src/journal/common/dto/JournalSocial/journal-social';
import { JournalSource } from 'src/journal/common/dto/JournalSource/journal-source';
import { Social } from 'src/journal/common/enum/social';

@Component({
  selector: 'app-journal-container',
  templateUrl: './journal-container.component.html',
  styleUrls: ['./journal-container.component.css']
})
export class JournalContainerComponent implements OnInit {

  public journal: JournalEntry[];

  constructor() {
    const img1: JournalImg = new JournalImg("../../../assets/img/banner1.jpg", "Img1");
    const img2: JournalImg = new JournalImg("../../../assets/img/banner2.jpg", "Img2");
    const img3: JournalImg = new JournalImg("../../../assets/img/banner3.jpg", "Img3");
    const img4: JournalImg = new JournalImg("../../../assets/img/banner4.jpg", "Img4");

    const text: string = "Linen is a textile made from the fibers of the flax plant, Linum usitatissimum. Linen is laborious to manufacture, but the fiber is very absorbent and garments made of linen are valued for their exceptional coolness and freshness in hot weather.\n\nMany products are made of linen: aprons, bags, towels (swimming, bath, beach, body and wash towels), napkins, bed linens, tablecloths, runners, chair covers, and men's and women's wear.";

    const entry1: JournalEntry = new JournalEntry(1, "Winter inspiration: Navy linens", img1, text);
    const entry2: JournalEntry = new JournalEntry(1, "Fall inspiration: Coal wool", img2, text);
    const entry3: JournalEntry = new JournalEntry(1, "Summer inspiration: Coal wool", img3, text);
    const entry4: JournalEntry = new JournalEntry(1, "Rainy inspiration: Coal wool", img4, text);

    this.journal = [entry1, entry2, entry3, entry4];
  }

  ngOnInit(): void {
  }

}
