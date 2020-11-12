import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';
import { IconDefinition, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { PartialObserver, Subscription } from 'rxjs';

@Component({
  selector: 'app-checkout-steps',
  templateUrl: './checkout-steps.component.html',
  styleUrls: ['./checkout-steps.component.css']
})
export class CheckoutStepsComponent implements OnInit, OnDestroy {

  public nextIcon: IconDefinition = faChevronRight;
  public step: string;
  
  private urlObserver: PartialObserver<Event>;
  private urlSubcriber: Subscription;

  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    this.setupUrlObserver();

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.urlSubcriber.unsubscribe();
  }

  private setupUrlObserver(): void {
    this.urlObserver = {
      next: (event: Event) => {
        if(event instanceof NavigationEnd){
          let navEvent: NavigationEnd = event;
          this.step = navEvent.urlAfterRedirects.split("/")[2];
        }
      }
    }

    this.urlSubcriber = this.router.events.subscribe(this.urlObserver);
  }

  public onNavigate(url: string): void {
    const pathToNavigate: string = "./"+url;
    this.router.navigate([pathToNavigate], {relativeTo: this.activeRoute});
  }

}
