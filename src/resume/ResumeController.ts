import { Controller, Get, Query, Render, Req, Res } from "@nestjs/common";
import { Response } from 'express';
import { ResumeService } from './ResumeService';

@Controller('/resume')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Get('/resume1')
  @Render('resume/resume1')
  staticRender() {
    return { message: 'Hello world!' };
  }

  @Get('/resume2')
  dynamicRender(@Query('userId') userId, @Res() response: Response) {
    const viewName = this.resumeService.getViewName();
    const data = this.resumeService.getUser(userId);
    return response.render(viewName, data);
  }

  @Get('/resume3')
  dynamicRenderByString(@Query('userId') userId, @Res() response: Response) {
    const viewName = this.resumeService.getViewName();
    const data = this.resumeService.getUser(userId);
    return response.send('<h1>안녕하세요 jojoldu님</h1>');
  }
}
