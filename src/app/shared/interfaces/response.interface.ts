import { NoRecordMessageInterface } from './no-record-message.interface';

export interface ResponseInterface {
  metadataKey?: string;
  noRecordMessage?: NoRecordMessageInterface;
  rows?: any[];
  count?: number;
}
