import { Component, OnInit } from '@angular/core';
import { IconDefinition, faCircle } from '@fortawesome/free-solid-svg-icons';
import { JournalEntryFull } from 'src/journal/common/dto/JournalEntryFull/journal-entry-full';
import { JournalImg } from 'src/journal/common/dto/JournalImg/journal-img';
import { JournalSocial } from 'src/journal/common/dto/JournalSocial/journal-social';
import { JournalSource } from 'src/journal/common/dto/JournalSource/journal-source';
import { Social } from 'src/journal/common/enum/social';

@Component({
  selector: 'app-journal-full-entry',
  templateUrl: './journal-full-entry.component.html',
  styleUrls: ['./journal-full-entry.component.css']
})
export class JournalFullEntryComponent implements OnInit {

  public entry: JournalEntryFull;
  public circleIcon: IconDefinition = faCircle;

  constructor() {
    const img1: JournalImg = new JournalImg("../../../assets/img/banner1.jpg", "Img1");
    const text: string = "Linen is a textile made from the fibers of the flax plant, Linum usitatissimum. Linen is laborious to manufacture, but the fiber is very absorbent and garments made of linen are valued for their exceptional coolness and freshness in hot weather.\n\nMany products are made of linen: aprons, bags, towels (swimming, bath, beach, body and wash towels), napkins, bed linens, tablecloths, runners, chair covers, and men's and women's wear. Linen is a textile made from the fibers of the flax plant, Linum usitatissimum. Linen is laborious to manufacture, but the fiber is very absorbent and garments made of linen are valued for their exceptional coolness and freshness in hot weather.\n\nMany products are made of linen: aprons, bags, towels (swimming, bath, beach, body and wash towels), napkins, bed linens, tablecloths, runners, chair covers, and men's and women's wear.";
    const s1: JournalSocial = new JournalSocial(Social.FB, "");
    const s2: JournalSocial = new JournalSocial(Social.INSTAGRAM, "");
    const s3: JournalSocial = new JournalSocial(Social.REDDIT, "");
    const s4: JournalSocial = new JournalSocial(Social.TWITTER, "");
    const s5: JournalSocial = new JournalSocial(Social.YOUTUBE, "");
    const social: JournalSocial[] = [s1, s2, s3, s4, s5];

    this.entry = new JournalEntryFull(1, "Winter inspiration: Navy linens", img1, text, "Parry Jackson", "November 10 2020", social);
    this.entry.source = new JournalSource("Wikipedia", "");
  }

  ngOnInit(): void {
  }

}
