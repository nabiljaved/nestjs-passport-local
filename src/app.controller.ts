import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {      
    return req.user;                    //we will use sessions to save this user 
  }

  @UseGuards(AuthenticatedGuard)
  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }


  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  getProtected(@Request() req): string {
    return req.user
  }


}
