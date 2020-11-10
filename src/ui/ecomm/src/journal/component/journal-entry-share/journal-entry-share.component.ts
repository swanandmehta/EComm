import { Component, Input, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faRedditAlien, faTwitter, faYoutube, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { JournalEntryFull } from 'src/journal/common/dto/JournalEntryFull/journal-entry-full';

@Component({
  selector: 'app-journal-entry-share',
  templateUrl: './journal-entry-share.component.html',
  styleUrls: ['./journal-entry-share.component.css']
})
export class JournalEntryShareComponent implements OnInit {
 
  @Input("entry")
  public entry: JournalEntryFull;

  public facebookIcon: IconDefinition = faFacebook;
  public instagramIcon: IconDefinition = faInstagram;
  public youtubeIcon: IconDefinition = faYoutube;
  public reditIcon: IconDefinition = faRedditAlien;
  public twitterIcon: IconDefinition = faTwitter;

  constructor() { }

  ngOnInit(): void {
  }

}
