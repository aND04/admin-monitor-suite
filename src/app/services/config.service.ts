import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ConfigService {
  private server: string;

  constructor() {
    const host = location.hostname;

    if (host === "localhost") {
      this.server = "http://localhost:3000";
    } else {
      this.server = "/api";
    }
  }

  setEndpoint(endpoint: string): void {
    if (endpoint === "localhost") {
      this.server = "http://localhost:3000";
    } else {
      this.server = "http://" + endpoint + "/api";
    }
  }

  getServer(service: string): string {
    return 'http://ms-cf-888269295091-LoadBalancer-1506010025.eu-west-1.elb.amazonaws.com' + service;
  }
}
