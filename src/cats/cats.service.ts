import { Injectable } from '@nestjs/common';

@Injectable() //signaling that CatsService is a class that can be managed by the Nest IoC container
export class CatsService {}
