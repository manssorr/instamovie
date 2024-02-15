package com.instamovie

import android.util.Log
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import okhttp3.Call
import okhttp3.Callback
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Response
import org.json.JSONObject
import java.io.IOException


class GetRequestModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "GetRequestModule"
    private val client = OkHttpClient()
    private var eventId = 0
    private val TAG = "ExampleGetRequest" // Tag used for logging

    @ReactMethod
    fun performGetRequest(url: String, promise: Promise) {
        Log.d(TAG, "Performing GET request to URL: $url") // Log the URL being requested
        val request = Request.Builder().url(url).build()

        client.newCall(request).enqueue(object : Callback {
            override fun onFailure(call: Call, e: IOException) {
                Log.e(TAG, "GET request failed", e) // Log failure
                promise.reject("GET_REQUEST_FAILED", e)
            }

            override fun onResponse(call: Call, response: Response) {
                if (!response.isSuccessful) {
                    Log.e(TAG, "GET request failed with code: ${response.code}")

                    val errorMap = Arguments.createMap().apply {
                        putBoolean("success", false) // Indicating the request was not successful
                        putInt("status_code", response.code) // The status code of the response
                        putString("status_message", response.message) // A message
                    }
                    // Reject the promise with the error map, providing detailed response info
                    promise.reject(
                        "${response.code}", // code
                        "GET request failed with code: ${response.code}", // message
                        errorMap // user info
                    )
                } else {
                    response.body?.string()?.let { responseBody ->
                        Log.d(
                            TAG, "GET request successful, parsing response"
                        ) // Log successful response
                        try {
                            val jsonObject = JSONObject(responseBody)
                            Log.d(
                                TAG, "Parsed JSON Object: $jsonObject"
                            ) // Log the parsed JSON Object

                            // Assuming jsonObject is your response and you want to add "success": true to it
                            val modifiedResponse = JSONObject().apply {
                                put("success", true)
                                put("status_code", 200)
                                put("status_message", "Fetched Successfully")
                                put(
                                    "data", jsonObject
                                ) // Embed the original jsonObject under "data"
                            }

                            promise.resolve(modifiedResponse.toString())
                        } catch (e: Exception) {
                            Log.e(TAG, "Failed to parse response into JSON", e) // Log parsing error
                            promise.reject("PARSE_ERROR", "Failed to parse response into JSON")
                        }
                    } ?: run {
                        Log.e(TAG, "Response body is null or empty") // Log empty response
                        promise.reject("EMPTY_RESPONSE", "Response body is null or empty")
                    }
                }
            }
        })
    }
}

