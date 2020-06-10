import { Injectable } from '@nestjs/common';
import { kMaxLength } from 'buffer';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getGoodbye(): string {
    return 'Goodbye!';
  }
}
