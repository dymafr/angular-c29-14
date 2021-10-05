import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap, debounceTime } from 'rxjs/operators';
import { Photo } from '../interfaces/photo.interface';
import { UnsplashService } from '../services/unsplash.service';
import {
  searchPhotosSuccessAction,
  trySearchPhotosAction,
} from './photos.actions';

@Injectable()
export class PhotosEffects {
  trySearchPhotosEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(trySearchPhotosAction),
      debounceTime(1000),
      switchMap(({ search }) => {
        return this.unsplashService.searchPhotos(search).pipe(
          map((photos: Photo[]) => searchPhotosSuccessAction({ photos })),
          catchError((err) => {
            console.error(err);
            return EMPTY;
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private unsplashService: UnsplashService
  ) {}
}
