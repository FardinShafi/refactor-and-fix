import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { LoginDto } from './dtos/login-user.dto';
import { AuthService } from './auth.service';
import { RegisterDto } from './dtos/register-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/login')
  @HttpCode(200)
  login(@Body() data: LoginDto) {
    return this.authService.loginUser(data.email, data.password);
  }

  @Post('/register')
  register(@Body() data: RegisterDto) {
    return this.authService.registerUser(data);
  }
}
