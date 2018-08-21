import { Module } from '@nestjs/common';
import { AppController } from '@kl/app.controller';
import { AppService } from '@kl/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
