import { PrismaClient } from '@prisma/client'
import { Database } from './database';

export class PrismaDatabase implements Database<PrismaClient> {
  private client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }
  getConnection() {
    return this.client;
  }
}
