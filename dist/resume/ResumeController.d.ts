import { Response } from 'express';
import { ResumeService } from './ResumeService';
export declare class ResumeController {
    private readonly resumeService;
    constructor(resumeService: ResumeService);
    getHello(): {
        message: string;
    };
    root(res: Response): void;
}
