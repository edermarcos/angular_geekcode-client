import { ErrorInterface } from './error.interface';

export interface HttpErrorResponseInterface {
  error?: ErrorInterface;
  message?: string;
  name?: string;
  ok?: boolean;
  status?: string;
}
