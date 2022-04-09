import { Injectable } from '@angular/core';

//Importamos los modulos para DB con firestore
import { AngularFirestore } from '@angular/fire/compat/firestore';

//Importamos nuestro modelo
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }
}
