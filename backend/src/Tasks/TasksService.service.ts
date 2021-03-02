import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import {quotesService} from "../Quotes/Quotes.service";


@Injectable()
export class TasksService {

    public constructor(
        private quotesService: quotesService
    ) {
    }

    @Cron(CronExpression.EVERY_30_SECONDS)
    async handleCron() {
        console.log('Every 30 seconds');
        return await this.quotesService.updateRates();
    }
}