[![node-red-contrib](https://img.shields.io/badge/node--red-node--red--contrib--solar-manager-aa4444.svg?style=flat-square)](https://flows.nodered.org/node/node-red-contrib-solar-manager)
[![npm](https://img.shields.io/npm/v/node-red-contrib-solar-manager.svg?style=flat-square)](https://www.npmjs.com/package/node-red-contrib-solar-manager)
[![build](https://img.shields.io/github/workflow/status/claudiospizzi/node-red-contrib-solar-manager/CI?style=flat-square)](https://github.com/claudiospizzi/node-red-contrib-solar-manager/actions/workflows/ci.yml)

# node-red-contrib-solar-manager

Nodes to control the [Solar Manager](https://www.solarmanager.ch/), a system to control the smart home power usage and for self-consumption optimization.

## Description

This contrib module provides nodes to interact with a Solar Manager. It is using the public API of the Solar Manager, can be found on the following link:

- [https://external-web.solar-manager.ch/](https://external-web.solar-manager.ch/)

## Nodes

### solar manager status

Get the current Solar Manager gateway and device status.

![solar manager status](.assets/solar-manager-status.png)

### solar manager switch

Control the mode for a switch device.

![solar manager switch](.assets/solar-manager-switch.png)

### solar manager smart plug

Control the mode for a smart plug device.

![solar manager smart plug](.assets/solar-manager-smart-plug.png)

### solar manager car charger

Control the mode for a car charger device.

![solar manager car charger](.assets/solar-manager-car-charger.png)

## Constraint

This module is not associated with the [Solar Manager AG](https://www.solarmanager.ch/).

This software is provided "as is", without any guarantees on the function and operation of the Solar Manager device and account. You use it at your own risk. For more details, check the license terms.
