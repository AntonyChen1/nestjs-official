import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable() //signaling that CatsService is a class that can be managed by the Nest IoC container
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    console.log('cat:', cat);
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
