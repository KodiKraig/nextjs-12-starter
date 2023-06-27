import { ApisauceInstance, create, ApiResponse } from 'apisauce';
import { ApiConfig, HelloWorldResponse } from './types';

/**
 * Configuring the apisauce instance.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: `${process.env.API_URL ?? 'http://localhost:3000'}/api`,
  timeout: 10000
};

/**
 * Manages all requests to the API. You can use this class to build out
 * various requests that you need to call from your backend API.
 */
class Api {
  apisauce: ApisauceInstance;
  config: ApiConfig;

  /**
   * Set up our API instance. Keep this lightweight!
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config;
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: 'application/json'
      }
    });
  }

  async getHelloWorld(name?: string): Promise<HelloWorldResponse> {
    const response = (await this.apisauce.get('hello-world', {
      name
    })) as ApiResponse<HelloWorldResponse>;
    if (response.ok) {
      return {
        ...response.data
      };
    }
    return {
      error: 'Unable to fetch hello world.'
    };
  }
}

// Singleton instance of the API for convenience
export const api = new Api();
