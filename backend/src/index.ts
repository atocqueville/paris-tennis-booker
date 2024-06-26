import { Elysia } from 'elysia';
import swagger from '@elysiajs/swagger';
import cors from '@elysiajs/cors';
import chalk from 'chalk';

import { registerControllers } from './server';
import { bootLogger, requestLogger } from './logger';

const gracefulShutdown = async () => {
    console.log(chalk.yellowBright('shutting down gracefully (5 seconds) ...'));
    setTimeout(() => {
        process.exit();
    }, 5000);
};

try {
    const app = new Elysia()
        .use(swagger())
        .use(cors())
        .onStop(gracefulShutdown)
        .onResponse({ as: 'global' }, requestLogger);

    registerControllers(app);
    process.on('SIGINT', app.stop);
    process.on('SIGTERM', app.stop);

    app.listen(process.env.PORT!, () => bootLogger(app));
} catch (e) {
    console.log(chalk.redBright('error booting the server'));
    console.error(e);
}
