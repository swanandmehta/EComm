import { Component, Input, OnInit } from '@angular/core';
import { NewsletterConfig } from 'src/introduction/common/dto/NewsletterConfig/newsletter-config';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  @Input("configuration")
  public config: NewsletterConfig

  constructor() { }

  ngOnInit(): void {
  }

}
