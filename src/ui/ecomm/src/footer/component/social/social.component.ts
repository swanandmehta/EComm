import { Component, OnInit } from '@angular/core';
import { IconDefinition, faInstagram, faFacebook, faYoutube, faRedditAlien, faTwitter } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  public facebookIcon: IconDefinition = faFacebook;
  public instagramIcon: IconDefinition = faInstagram;
  public youtubeIcon: IconDefinition = faYoutube;
  public reditIcon: IconDefinition = faRedditAlien;
  public twitterIcon: IconDefinition = faTwitter;

  constructor() { }

  ngOnInit(): void {
  }

}
