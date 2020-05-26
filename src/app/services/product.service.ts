import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from './data.service';


@Injectable()
export class ProductService extends DataService {

  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/albums', http);
  }

}
