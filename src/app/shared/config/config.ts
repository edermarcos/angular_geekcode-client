import { environment } from '../../../environments/environment';
export const server = environment.production ? 'http://go.mtech-systems.com' : 'http://localhost:9000';
export const config = {
  api: `${ server }/api-dashboard`,
  access_token: 'vcJfVQyVC1XzSPzBxofIG7uII2MEiTaa',
  mailchimpApi: 'https://us11.api.mailchimp.com/3.0/',
  mailchimpKey: 'dce28aceba9a8f1ab09b8e3412e1864b-us11',
  postsApi: 'https://news.mtech-systems.com/wp-json/wp/v2/',
  gCalendarApi: 'https://calendar.google.com/calendar/',
  slowTimer: 5000,
  timer: 2000,
  maxSize: 1024 * 1024,
  limit: 14,
  prefix: 'intranet',
  root: '/intranet/welcome'
};

