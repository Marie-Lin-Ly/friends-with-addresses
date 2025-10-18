import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'postgresql',
    // url: postgres://user:password@host:port/database?ssl=true
    url: 'postgres://db_61mn_user:dzZihZql852gUqJSwsUclqYEpxBEx2er@dpg-d3p4rdbe5dus738fu25g-a.frankfurt-postgres.render.com:5432/db_61mn?sslmode=require',
  // host: 'dpg-d3p4rdbe5dus738fu25g-a',
  // port: 5432,
  // user: 'db_61mn_user',
  // password: 'dzZihZql852gUqJSwsUclqYEpxBEx2er',
  // database: 'db_61mn',
  // ssl: {
  //   rejectUnauthorized: false,
  // },
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
