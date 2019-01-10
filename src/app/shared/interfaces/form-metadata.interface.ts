import { TypeFieldEnum } from '../enums/type-field-enum';

export interface FormMetadataInterface {
  caption: string;
  defaultValue: string;
  category: string;
  metadataKey: string;
  columns: string;
  readonly: boolean;
  idx: number;
  maxLength: number;
  fieldType: TypeFieldEnum;
  vmSuccess: string;
  vmError: string;
  propertyName: string;
  placeholder: string;
  fmName: string;
  required: boolean;
  visible: boolean;
  id: string;

  createdAt: string;
  updatedAt: string;
}
