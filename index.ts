import { DeviceModelInfo } from "./interfaces";
import devicesList from "./deviceList.json";

let __device_map_cached: Map<DeviceModelInfo["model"], DeviceModelInfo> | null =
  null;

export default function getDeviceList(): Map<
  DeviceModelInfo["model"],
  DeviceModelInfo
> {
  if (__device_map_cached !== null) {
    return __device_map_cached!!;
  }

  const devices = devicesList as DeviceModelInfo[];
  const device_map = new Map<DeviceModelInfo["model"], DeviceModelInfo>();

  for (const device of devices) {
    device_map.set(device.model, device);
  }

  __device_map_cached = device_map;

  return getDeviceList();
}
