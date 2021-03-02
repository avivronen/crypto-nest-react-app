import {Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {QuotesController} from "./Quotes.controller";
import {QuotesRepository} from "./Quotes.repository";
import { quotesService } from "./Quotes.service";
import { TasksService } from "../Tasks/TasksService.service";

@Module({
    controllers: [QuotesController],
    providers: [quotesService, TasksService],
    imports: [
        TypeOrmModule.forFeature([QuotesRepository]),
    ],

})
export class QuotesModule {}
