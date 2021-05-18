package com.reacttest; // replace com.your-app-name with your app’s name
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import java.util.Map;
import java.util.HashMap;
import android.util.Log;

public class CalendarModule extends ReactContextBaseJavaModule {
    public CalendarModule(ReactApplicationContext reactContext) {
        super(reactContext);
     }

   public String getName() {
      return "CalendarModule";
   }

   @ReactMethod
   public void createCalendarEvent(String name, String location, Callback callback) {
      Log.d("CalendarModule", "Create event called with name: " + name + " and location: " + location);

      Integer eventId = 5;
      callback.invoke(eventId);
   }
}
