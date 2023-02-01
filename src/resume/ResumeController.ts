import { Controller, Get, Render, Res } from '@nestjs/common';
import { Response } from 'express';
import { ResumeService } from './ResumeService';

@Controller('/resume')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Get('/resume1')
  @Render('resume/resume1')
  getHello() {
    return { message: 'Hello world!' };
  }

  @Get('/resume2')
  root(@Res() res: Response) {
    const viewName = this.resumeService.getViewName();
    return res.render(viewName, {
      message: 'Hello world!, Resume2',
    });
  }
}
