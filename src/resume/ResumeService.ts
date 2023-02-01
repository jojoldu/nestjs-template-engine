import { Injectable } from '@nestjs/common';

@Injectable()
export class ResumeService {
  getViewName(): string {
    return 'resume/resume1';
  }

  getUser(userId) {
    return {
      message: `Hello World, ${userId}`,
      name: `${userId}`,
    };
  }
}
