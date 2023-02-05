import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('home')
  home(): string {
    return this.appService.home();
  }
  @Get('CV')
  CV(): string {
    return this.appService.CV();
  }
  @Get('hello')
  getHello3(): string {
    return this.appService.getHello();
  }
  @Get('hello2')
  @Render('index.html')
  getHello2(): {} {
    return this.appService.getHello2();
  } 
  @Get()
  @Render('home.html')
  getHome(): {} {
    return this.appService.getHome();
    
  }
  @Get('about-us')
  @Render('about-us.html')
  getAboutUs(): {} {
    return this.appService.getAboutUs();
  }
}
 