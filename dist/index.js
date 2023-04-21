"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const deviceList_json_1 = __importDefault(require("./deviceList.json"));
let __device_map_cached = null;
function getDeviceList() {
  if (__device_map_cached !== null) {
    return __device_map_cached;
  }
  const devices = deviceList_json_1.default;
  const device_map = new Map();
  for (const device of devices) {
    device_map.set(device.model, device);
  }
  __device_map_cached = device_map;
  return getDeviceList();
}
exports.default = getDeviceList;
