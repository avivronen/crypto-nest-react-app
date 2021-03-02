import {Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {QuotesModule} from "./Quotes/Quotes.module";
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
      TypeOrmModule.forRoot(),
      ConfigModule.forRoot(),
      QuotesModule,
      ScheduleModule.forRoot()
  ] ,
  controllers: [],
  providers: [],
})
export class AppModule {}
