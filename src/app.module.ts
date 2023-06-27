import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './domains/user/user.controller';
import { UserService } from './domains/user/user.service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
