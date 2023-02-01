import { Module } from '@nestjs/common';
import { AppModule } from './app/app.module';
import { ResumeModule } from './resume/ResumeModule';

@Module({
  imports: [AppModule, ResumeModule],
  controllers: [],
  providers: [],
})
export class MainModule {}
