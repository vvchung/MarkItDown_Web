export enum AppStatus {
  IDLE = 'IDLE',
  UPLOADING = 'UPLOADING',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  ERROR = 'ERROR'
}

export interface ConvertError {
  title: string;
  message: string;
}

export interface FileData {
  file: File;
  previewUrl?: string;
  type: 'image' | 'pdf' | 'text' | 'unknown';
}
