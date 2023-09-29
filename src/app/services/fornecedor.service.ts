import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fornecedor } from '../models/fornecedor.model';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  private baseURL: string =  'http://localhost:8080';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(`${this.baseURL}/fornecedores`);
  }

  findById(id: string): Observable<Fornecedor> {
    return this.http.get<Fornecedor>(`${this.baseURL}/fornecedores/${id}`);
  }

  save(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.post<Fornecedor>(`${this.baseURL}/fornecedores`, fornecedor);
  }

  update(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.put<Fornecedor>(`${this.baseURL}/fornecedores/${fornecedor.id}`, fornecedor );
  }

  delete(fornecedor: Fornecedor): Observable<any> {
    return this.http.delete<Fornecedor>(`${this.baseURL}/fornecedores/${fornecedor.id}`);
  }

}
