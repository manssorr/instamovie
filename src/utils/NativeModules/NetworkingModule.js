/**
 * This exposes the native CalendarModule module as a JS module. This has a
 * function 'createCalendarEvent' which takes the following parameters:
 *
 * 1. String name: A string representing the name of the event
 * 2. String location: A string representing the location of the event
 */
import {NativeModules} from 'react-native';

const {GetRequestModule}: {GetRequestModule: IGetRequestModule} = NativeModules;

// Define the interface for the response
interface IErrorResponse {
  type: string;
  message: string;
  userInfo: {
    success: boolean,
    status_code: number,
    status_message: string,
  };
}

export interface IResponse {
  success: boolean;
  status_code: number;
  status_message: string;
  data: string;
}

// Define the interface for the module
interface IGetRequestModule {
  performGetRequest(url: string): Promise<IResponse | IErrorResponse>;
}

// getRequest
export const nativeGet = async (url: string): Promise<IResponse> => {
  try {
    const response = await GetRequestModule.performGetRequest(url);
    const json: IResponse = JSON.parse(response);

    if (json.success) {
      return {
        status_code: json.status_code,
        status_message: json.status_message || 'Success',
        success: json.success,
        data: json.data,
      };
    }
  } catch (e) {
    const error: IErrorResponse = e;
    console.log('nativeGet Err: ', error);
    return {
      status_code: error?.userInfo?.status_code,
      status_message: error.message,
      success: false,
      data: '',
    };
  }
};

export default nativeGet;
