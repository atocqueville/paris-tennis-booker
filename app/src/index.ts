import { Elysia } from 'elysia'
import swagger from '@elysiajs/swagger';
import chalk from 'chalk';

import { registerControllers } from './server';
import { bootLogger, requestLogger } from './logger';

const gracefulShutdown = async () => {
  console.log(chalk.yellowBright('shutting down gracefully (5 seconds) ....'));
  setTimeout(() => { process.exit() }, 5000);
};

try {
  const app = new Elysia()
    .use(swagger())
    .onStop(gracefulShutdown)
    .onResponse(requestLogger)
    // .onError(({ code, error, set }) => ErrorMessages(code, error, set));

  app.get('/', () => 'root route lol')

  registerControllers(app);
  process.on('SIGINT', app.stop);
  process.on('SIGTERM', app.stop);

  app.listen(process.env.PORT!, () => bootLogger(app));
} catch (e) {
  console.log(chalk.redBright('error booting the server'));
  console.error(e);
}