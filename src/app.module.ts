import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AppController } from './app.controller';
import { CONFIG_OPTIONS_PROVIDER } from './common/config/config-options.service';
import { TypeOrmConfigService } from './common/config/typeorm-config.service';
import { AllExceptionFilter } from './common/filters/all-exception.filter';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { WinstonLoggerModule } from './common/logger/winston-logger.module';
import { ExtendRequest } from './common/middlewares/extend-request.middleware';
import { AnalyzingModule } from './modules/analyizing/analyzing.module';
import { StudentsModule } from './modules/students/students.module';
import { TracksModule } from './modules/tracks/tracks.module';

@Module({
  imports: [
    ConfigModule.forRoot(CONFIG_OPTIONS_PROVIDER),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
    }),
    WinstonLoggerModule,
    StudentsModule,
    TracksModule,
    AnalyzingModule,
  ],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
    { provide: APP_FILTER, useClass: AllExceptionFilter },
  ],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExtendRequest).forRoutes('*');
  }
}
