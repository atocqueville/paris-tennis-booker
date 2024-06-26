import type { Elysia } from 'elysia';
import chalk from 'chalk';

export function bootLogger(app: Elysia) {
    console.log(
        chalk.blueBright(`🦊 Elysia is running at ${app.server?.hostname}:`) +
            chalk.greenBright(`${app.server?.port}`)
    );
}

export function requestLogger(ctx: any) {
    let coloredMethod;
    switch (ctx.request.method) {
        case 'GET':
            coloredMethod = chalk.green(ctx.request.method);
            break;
        case 'DELETE':
            coloredMethod = chalk.red(ctx.request.method);
            break;
        default:
            coloredMethod = chalk.yellowBright(ctx.request.method);
            break;
    }
    console.info(
        coloredMethod,
        chalk.yellow('--'),
        ctx.request.url.replace(`http://localhost:${process.env.PORT}`, ''),
        chalk.yellow('--'),
        ctx.code
            ? chalk.bgRedBright(ctx.code)
            : ctx.set.status === 200
              ? chalk.bgGreen(ctx.set.status)
              : ctx.set.status === 300
                ? chalk.bgYellowBright(chalk.black(ctx.set.status))
                : chalk.bgRedBright(chalk.black(ctx.set.status)),
        new Date()
    );
}
