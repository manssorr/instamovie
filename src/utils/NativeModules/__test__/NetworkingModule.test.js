import {NativeModules} from 'react-native';
import nativeGet from '../NetworkingModule'; // Adjust this import

// Explicitly mock NativeModules
jest.mock('react-native', () => {
  return {
    NativeModules: {
      GetRequestModule: {
        performGetRequest: jest.fn(),
      },
    },
  };
});

describe('nativeGet', () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
  });

  it('successfully retrieves data', async () => {
    const mockData = JSON.stringify({
      success: true,
      status_code: 200,
      status_message: 'Success',
      data: 'Data',
    });

    NativeModules.GetRequestModule.performGetRequest.mockResolvedValue(
      mockData,
    );

    const response = await nativeGet('https://example.com');

    // Adjusted expectation based on successful response
    expect(response).toEqual(JSON.parse(mockData));
    expect(
      NativeModules.GetRequestModule.performGetRequest,
    ).toHaveBeenCalledWith('https://example.com');
  });

  it('handles API errors correctly', async () => {
    const errorResponse = {
      message: 'Bad Request',
      userInfo: {
        status_code: 400,
      },
    };

    // Mocking the rejection scenario
    NativeModules.GetRequestModule.performGetRequest.mockRejectedValue(
      errorResponse,
    );

    const response = await nativeGet('https://example.com');

    // Adjusted expectation based on error handling logic
    expect(response).toEqual({
      success: false,
      status_code: errorResponse.userInfo.status_code,
      status_message: errorResponse.message,
      data: '',
    });
  });
});
