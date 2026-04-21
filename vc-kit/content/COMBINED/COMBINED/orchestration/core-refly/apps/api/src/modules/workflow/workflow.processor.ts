import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { WorkflowService } from './workflow.service';
import { RunWorkflowJobData, PollWorkflowJobData } from './workflow.dto';
import { QUEUE_RUN_WORKFLOW, QUEUE_POLL_WORKFLOW } from '../../utils/const';

@Processor(QUEUE_RUN_WORKFLOW)
export class RunWorkflowProcessor extends WorkerHost {
  private readonly logger = new Logger(RunWorkflowProcessor.name);

  constructor(private workflowService: WorkflowService) {
    super();
  }

  async process(job: Job<RunWorkflowJobData>) {
    try {
      await this.workflowService.runWorkflow(job.data);
    } catch (error) {
      this.logger.error(`[${QUEUE_RUN_WORKFLOW}] Error processing job ${job.id}: ${error?.stack}`);
      throw error;
    }
  }
}

@Processor(QUEUE_POLL_WORKFLOW)
export class PollWorkflowProcessor extends WorkerHost {
  private readonly logger = new Logger(PollWorkflowProcessor.name);

  constructor(private workflowService: WorkflowService) {
    super();
  }

  async process(job: Job<PollWorkflowJobData>) {
    try {
      await this.workflowService.pollWorkflow(job.data);
    } catch (error) {
      this.logger.error(`[${QUEUE_POLL_WORKFLOW}] Error processing job ${job.id}: ${error?.stack}`);
      throw error;
    }
  }
}
