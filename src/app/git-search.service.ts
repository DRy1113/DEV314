import { Injectable, Inject } from '@angular/core';
import { GitSearch } from './git-search';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/publishReplay';

@Injectable()
export class GitSearchService {

    cachedValues: Array<{
        [query: string]: GitSearch
    }> = [];

    cachedValue: string;

    search: Observable<GitSearch>;

    constructor(private http: HttpClient) {
      
    }

    gitSearch : Function = (query: string) : Observable<GitSearch> => {
    
        if (!this.search){

            this.search = this.http.get<GitSearch>('https://api.github.com/search/repositories?q=' + query)
                .publishReplay(1)
                .refCount();
            this.cachedValue = query;

        } else if (this.cachedValue !== query){

            this.search = null;
            this.gitSearch(query);

        }

        return this.search;
    }

  /*
    gitSearch = (query: string): Promise<GitSearch> => {
        
    let promise = new Promise<GitSearch>((resolve, reject) => {
        if (this.cachedValues[query]) {
            resolve(this.cachedValues[query])
        }
        else {
            this.http.get('https://api.github.com/search/repositories?q=' + query)
            .toPromise()
            .then( (response) => {
                resolve(response as GitSearch)
            }, (error) => {
                reject(error);
            })
        }
    })
        return promise;
    } */

}