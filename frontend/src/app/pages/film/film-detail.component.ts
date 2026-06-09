
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { FilmService } from '../../../service/film.service';
import { Film } from '../../../service/film.entity';
import { Category } from '../../../service/category.entity';

@Component({
  selector: 'app-film-detail',
  standalone: false,
  templateUrl: './film-detail.component.html',
  styleUrl: './film-detail.component.css',
})
export class FilmDetailComponent {

  private route = inject(ActivatedRoute);
  private srv = inject(FilmService);

  item$ = this.route.paramMap.pipe(
    switchMap(params => this.srv.get(params.get('id')!))
  );

  getCategoryName(cat: Category | string): string {
    return typeof cat === 'object' ? cat.name : cat;
  }
}
