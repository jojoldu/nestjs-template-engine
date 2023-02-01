import { Module } from '@nestjs/common';
import { ResumeController } from './ResumeController';
import { ResumeService } from './ResumeService';

@Module({
  imports: [],
  controllers: [ResumeController],
  providers: [ResumeService],
})
export class ResumeModule {}
