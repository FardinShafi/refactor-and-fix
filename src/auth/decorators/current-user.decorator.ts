import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (_: unknown, context: ExecutionContext) => {
    const reques = context.switchToHttp().getRequest();
    const userId = Number(reques.headers['x-auth-userid']);
    return userId;
  },
);
