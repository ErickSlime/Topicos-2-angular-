import { Component } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent {
  
  tableColumns: string[] = ['id-column', 'nome-column', 'descricao-column', 'marca-column',
   'fornecedor-column', 'categoria-column', 'preco-column', 'estoque-column'];
   
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.findAll().subscribe(data => {
      this.produtos = data;
    });
  }
}
