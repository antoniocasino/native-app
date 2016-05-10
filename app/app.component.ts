import {Component} from "angular2/core";
import {RouteConfig} from "angular2/router";
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {HTTP_PROVIDERS} from "angular2/http";


import {LoginPage} from "./pages/login/login.component";
import {ListPage} from "./pages/list/list.component";

@Component({
  selector: "main",
  directives: [NS_ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, NS_ROUTER_PROVIDERS],
  template: "<page-router-outlet></page-router-outlet>"
})
@RouteConfig([
  { path: "/Login", component: LoginPage, name: "Login", useAsDefault: true },
  { path: "/List", component: ListPage, name: "List" }
])
export class AppComponent {}
