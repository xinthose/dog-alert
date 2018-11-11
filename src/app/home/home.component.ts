import { Component, OnInit } from "@angular/core";

import { connectionType, getConnectionType, startMonitoring, stopMonitoring } from "tns-core-modules/connectivity";

import * as connectivity from "tns-core-modules/connectivity";

import bluetooth = require('nativescript-bluetooth');

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    connectionType: string;

    constructor() {
        connectivity.startMonitoring((newConnectionType: number) => {
            switch (newConnectionType) {
                case connectivity.connectionType.none:
                    this.connectionType = "None";
                    console.log("Connection type changed to none.");
                    break;
                case connectivity.connectionType.wifi:
                    this.connectionType = "Wi-Fi";
                    console.log("Connection type changed to WiFi.");
                    break;
                case connectivity.connectionType.mobile:
                    this.connectionType = "Mobile";
                    console.log("Connection type changed to mobile.");
                    break;
                case connectivity.connectionType.ethernet:
                    this.connectionType = "Ethernet";
                    console.log("Connection type changed to ethernet.");
                    break;
                case connectivity.connectionType.bluetooth:
                    this.connectionType = "Bluetooth";
                    console.log("Connection type changed to bluetooth.");
                    break;
                default:
                    break;
            }
        });

        bluetooth.hasCoarseLocationPermission().then(
            function (granted) {
                console.log("Has Location Permission? " + granted);
                if (granted) {
                    this.scanBluetooth();
                } else {
                    this.requestBluetooth()
                }
            }
        );
    }

    requestBluetooth() {
        bluetooth.requestCoarseLocationPermission().then(
            function (granted) {
                console.log("Location permission requested, user granted? " + granted);
            }
        );
    }

    scanBluetooth() {
        bluetooth.startScanning({
            serviceUUIDs: ["L2CAP"],
            seconds: 4,
            onDiscovered: function (peripheral) {
                console.log("Periperhal found with UUID: " + peripheral.UUID);
            },
            skipPermissionCheck: false,
        }).then(function () {
            console.log("scanning complete");
        }, function (err) {
            console.log("error while scanning: " + err);
        });
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    getConnType() {
        // result is ConnectionType enumeration (none, wifi or mobile)
        const myConnectionType = getConnectionType();

        switch (myConnectionType) {
            case connectionType.none:
                // Denotes no Internet connection.
                console.log("No connection");
                break;
            case connectionType.wifi:
                // Denotes a WiFi connection.
                console.log("WiFi connection");
                break;
            case connectionType.mobile:
                // Denotes a mobile connection, i.e. cellular network or WAN.
                console.log("Mobile connection");
                break;
            case connectionType.ethernet:
                // Denotes a ethernet connection.
                console.log("Ethernet connection");
                break;
            // Bluetooth functionality in master branch (to be released with 5.0.0)
            case connectionType.bluetooth:
                // Denotes a bluetooth connection.
                console.log("Bluetooth connection");
                break;
            default:
                break;
        }
    }

    ngOnDestroy(): void {
        connectivity.stopMonitoring();
        bluetooth.stopScanning().then(function () {
            console.log("scanning stopped");
        });
    }
}
