import {Injectable} from "angular2/core";
import {Http, Headers} from "angular2/http";
import {Config} from "../config";
import {Grocery} from "./grocery";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()
export class GroceryListService {
  constructor(private _http: Http) {}

  load() {
    return this._http.get(Config.apiUrl + "meetings")
    .map(res => res.json())
    .map(data => {
      let groceryList = [];
      data.forEach((grocery) => {
        groceryList.push(new Grocery(grocery.id, grocery.name));
      });
      return groceryList;
    })
    .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }

  add(name: string) {
    return this._http.post(
      Config.apiUrl + "meetings",
      JSON.stringify({ name: name ,startDate: "12/05/2016", endDate: "12/05/2016", meetingStart: "12/05/2016", meetingEnd:"12/05/2016"}))
    .map(res => res.json())
    .map(data => {
      return new Grocery(data.id, name);
    })
    .catch(this.handleErrors);
  }
}
