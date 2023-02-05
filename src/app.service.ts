import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from Anne!';
  }
  getHello2(): {} {
    return {message: 'Hello World!', title: 'My Greeting App'
  }
  }
  home(): string {
    return 'Thank you for visiting my home site'
  }
  CV(): string {
    return 'This is my CV'
  }
  getHome(): {} {
    return {title: 'Home Page'};
  }
  getAboutUs(): {} {
    return {title: 'About Us Page'};
  }


}
