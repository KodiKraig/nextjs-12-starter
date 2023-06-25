import { ServerResponse } from './server';

export interface HelloWorld {
  message: string;
}

export interface HelloWorldResponse extends ServerResponse<HelloWorld> {}
