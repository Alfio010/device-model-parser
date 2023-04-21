import devicesList from "./deviceList.json";

interface IDeviceModelInfo {
  retailBranding: string;
  marketingName: string;
  device: string;
  model: string;
}

let __device_map_cached: Map<
  IDeviceModelInfo["model"],
  IDeviceModelInfo
> | null = null;

export default function getDeviceList(): Map<
  IDeviceModelInfo["model"],
  IDeviceModelInfo
> {
  if (__device_map_cached !== null) {
    return __device_map_cached!!;
  }

  const devices = devicesList as IDeviceModelInfo[];
  const device_map = new Map<IDeviceModelInfo["model"], IDeviceModelInfo>();

  for (const device of devices) {
    device_map.set(device.model, device);
  }

  __device_map_cached = device_map;

  return getDeviceList();
}
