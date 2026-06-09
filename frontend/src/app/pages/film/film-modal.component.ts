
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Film } from '../../../service/film.entity';
import { Category } from '../../../service/category.entity';
import { CategoryService } from '../../../service/category.service';

@Component({
  selector: 'app-film-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrl: './film-modal.component.css',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{ item.id ? 'Modifica' : 'Aggiungi' }} film</h4>
    </div>

    <div class="modal-body">
      <div class="mb-3">
        <label class="form-label">Nome</label>
        <input type="text" class="form-control" [(ngModel)]="item.name" />
      </div>
      <div class="mb-3">
        <label class="form-label">Descrizione</label>
        <textarea class="form-control" [(ngModel)]="item.description"></textarea>
      </div>
      <div class="mb-3">
        <label class="form-label">Rating</label>
        <input type="number" class="form-control" step="0.1" [(ngModel)]="item.rating" />
      </div>
      <div class="mb-3">
        <label class="form-label">Data di rilascio</label>
        <input type="date" class="form-control" [(ngModel)]="releaseDate" />
      </div>
      <div class="mb-3">
        <label class="form-label">Categoria</label>
        <select class="form-control" [(ngModel)]="item.categoryID">
          <option *ngFor="let cat of categories" [value]="cat.id">{{ cat.name }}</option>
        </select>
      </div>
    </div>

    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="activeModal.dismiss()">Annulla</button>
      <button type="button" class="btn btn-primary" (click)="confirm()">Conferma</button>
    </div>
  `
})
export class FilmModalComponent implements OnInit {

  activeModal = inject(NgbActiveModal);
  private categorySrv = inject(CategoryService);

  item: Partial<Film> = {};
  categories: Category[] = [];
  releaseDate: string = '';

  ngOnInit() {
    this.categorySrv.list().subscribe(cats => {
      this.categories = cats;
    });
  }

  setData(data: Film) {
    this.item = { ...data };
    this.releaseDate = data.releaseDate ? new Date(data.releaseDate).toISOString().split('T')[0] : '';
  }

  confirm() {
    if (this.releaseDate) {
      this.item.releaseDate = new Date(this.releaseDate);
    }
    this.activeModal.close(this.item);
  }
}
