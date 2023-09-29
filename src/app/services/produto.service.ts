import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private baseURL: string =  'http://localhost:8080';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.baseURL}/produtos`);
  }

  findById(id: string): Observable<Produto> {
    return this.http.get<Produto>(`${this.baseURL}/produtos/${id}`);
  }

  save(produto: Produto): Observable<Produto> {
    const obj = {
      nome: produto.nome,
      descricao: produto.descricao,
      idMarca: produto.marca.id,
      idFornecedor: produto.fornecedor.id,
      idCategoria: produto.categoria.id,
      preco: produto.preco,
      estoque: produto.estoque  
    }
    return this.http.post<Produto>(`${this.baseURL}/produtos`, obj);
  }

  update(produto: Produto): Observable<Produto> {
    const obj = {
        nome: produto.nome,
        descricao: produto.descricao,
        idMarca: produto.marca.id,
        idFornecedor: produto.fornecedor.id,
        idCategoria: produto.categoria.id,
        preco: produto.preco,
        estoque: produto.estoque  
      }
    return this.http.put<Produto>(`${this.baseURL}/produtos/${produto.id}`, obj );
  }

  delete(produto: Produto): Observable<any> {
    return this.http.delete<Produto>(`${this.baseURL}/produtos/${produto.id}`);
  }

}
