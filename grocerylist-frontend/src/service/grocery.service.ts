import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  private itemsSubject = new BehaviorSubject<Item[]>([]);
  items$ = this.itemsSubject.asObservable();

  private apiUrl = 'http://127.0.0.1:8000/items/';

  constructor(private http: HttpClient) {}

  getItems(): void {
    this.http.get<Item[]>(this.apiUrl).subscribe(items => {
      this.itemsSubject.next(items);
    });
  }

  // getItems(): Observable<Item[]> {
  //     return this.http.get<Item[]>(this.apiUrl);
  // }

  addItem(item: Item) {
    return this.http.post<Item>(this.apiUrl, item).pipe(
      tap(created => {
        this.itemsSubject.next([
          ...this.itemsSubject.value,
          created
        ]);
      })
    );
  }

  // addItem(item: Item): Observable<Item> {
  //   return this.http.post<Item>(this.apiUrl, item);
  // }

  updateItem(id: number, item: Item) {
    return this.http.put<Item>(`${this.apiUrl}${id}/`, item).pipe(
      tap(updated => {
        this.itemsSubject.next(
          this.itemsSubject.value.map(i =>
            i.id === updated.id ? updated : i
          )
        );
      })
    );
  }

  // updateItem(id: number, item: Item): Observable<Item> {
  //   return this.http.put<Item>(`${this.apiUrl}${id}/`, item);
  // }

  deleteItem(id: number) {
    return this.http.delete(`${this.apiUrl}${id}/`).pipe(
      tap(() => {
        this.itemsSubject.next(
          this.itemsSubject.value.filter(i => i.id !== id)
        );
      })
    );
  }

  // deleteItem(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}${id}/`);
  // }

}
