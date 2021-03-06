package com.wirvsvirus;

import androidx.core.content.ContextCompat;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

import android.app.NotificationChannel; 
import android.app.NotificationManager;
import android.content.ComponentName;
import android.content.ServiceConnection;
import android.os.Build;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.IBinder;

import org.jetbrains.annotations.Nullable;

public class MainActivity extends ReactActivity {
    private static final String CHANNEL_ID = "yo";

    private Intent mServiceIntent;

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "wirvsvirus";
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
        };
    }

    private void createNotificationChannel() {
        // Create the NotificationChannel, but only on API 26+ because
        // the NotificationChannel class is new and not in the support library
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            CharSequence name = getString(R.string.channel_name);
            String description = getString(R.string.channel_description);
            int importance = NotificationManager.IMPORTANCE_DEFAULT;
            NotificationChannel channel = new NotificationChannel(CHANNEL_ID, name, importance);
            channel.setDescription(description);
            // Register the channel with the system; you can't change the importance
            // or other notification behaviors after this
            NotificationManager notificationManager = getSystemService(NotificationManager.class);
            notificationManager.createNotificationChannel(channel);
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        createNotificationChannel();
        mServiceIntent = new Intent(this, BeaconService.class);
        ContextCompat.startForegroundService(this, mServiceIntent);
        // initBluetoothAdapter();
        // initLocationManager();
    }


/**
     * Initializes the BluetoothAdapter. Manifest file is already setup to allow bluetooth access.
     * The user will be asked to enable bluetooth if it is turned off
     */
    // private void initBluetoothAdapter() {
    //     BluetoothAdapter bluetoothAdapter = ((BluetoothManager) getSystemService(Context.BLUETOOTH_SERVICE)).getAdapter();
    //     // Ensures Bluetooth is available on the device and it is enabled. If not,
    //     // displays a dialog requesting user permission to enable Bluetooth.
    //     if (bluetoothAdapter != null && !bluetoothAdapter.isEnabled()) {
    //         Intent enableBtIntent = new Intent(BluetoothAdapter.ACTION_REQUEST_ENABLE);
    //         startActivityForResult(enableBtIntent, 1);
    //     }
    // }

    // private void initLocationManager() {
    //     int permissionCheck = ContextCompat.checkSelfPermission(
    //             this,
    //             Manifest.permission.ACCESS_FINE_LOCATION
    //     );
    //     if (permissionCheck != PackageManager.PERMISSION_GRANTED) {
    //         if (ActivityCompat.shouldShowRequestPermissionRationale(
    //                 this,
    //                 Manifest.permission.ACCESS_FINE_LOCATION
    //         )
    //         ) {
    //             Toast.makeText(
    //                     this,
    //                     "The permission to get BLE location data is required",
    //                     Toast.LENGTH_SHORT
    //             ).show();
    //         } else {
    //             requestPermissions(
    //                     new String[]{
    //                             Manifest.permission.ACCESS_COARSE_LOCATION,
    //                             Manifest.permission.ACCESS_FINE_LOCATION
    //                     }, 1
    //             );
    //         }
    //     } else {
    //         // Toast.makeText(this, "Location permissions already granted", Toast.LENGTH_SHORT).show()
    //     }
    // }
}
