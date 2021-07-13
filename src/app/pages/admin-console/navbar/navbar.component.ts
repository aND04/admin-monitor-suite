import { Component, OnDestroy } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import * as _ from "lodash";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnDestroy {
  sub: any;
  home: string;
  users: string;
  directories: string;
  tags: string;
  entities: string;
  websites: string;
  domains: string;
  crawler: string;
  pages: string;
  settings: string;
  usability: string;

  constructor(private router: Router) {
    this.sub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.home = _.isEqual(_.size(_.split(event.url, "/")), 2)
          ? "primary"
          : "default";
        this.users = this.getButtonColor(event.url, 'users');
        this.directories = this.getButtonColor(event.url, 'directories');
        this.tags = this.getButtonColor(event.url, 'tags');
        this.entities = this.getButtonColor(event.url, 'entities');
        this.websites = this.getButtonColor(event.url, 'websites');
        this.domains = this.getButtonColor(event.url, 'domains');
        this.crawler = this.getButtonColor(event.url, 'crawler');
        this.pages = this.getButtonColor(event.url, 'pages');
        this.settings = this.getButtonColor(event.url, 'settings');
        this.usability = this.getButtonColor(event.url, 'usability');
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private getButtonColor(url: string, expected: string): 'primary' | 'default' {
    return _.includes(url, expected) ? 'primary' : 'default';
  }
}
