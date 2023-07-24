import { Controller, Get, Header, Headers, Ip } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/whoami')
  getDetails(@Headers() h, @Ip() ip): { ipaddress: string, language: string, software: string } {

    return {
      ipaddress: ip,
      language: h['accept-language'],
      software: h['user-agent']
    };
  }
}
