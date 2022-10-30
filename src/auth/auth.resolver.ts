import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Login, Register } from 'src/types/graphql';
import { AuthService } from './auth.service';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation('register')
  register(@Args('register') register: Register) {
    return this.authService.register(register);
  }

  @Mutation('login')
  login(@Args('login') login: Login) {
    return this.authService.login(login);
  }
}
