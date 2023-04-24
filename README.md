# device-model-parser

Converts the model of Android devices into the extended name.

The list is taken from https://storage.googleapis.com/play_public/supported_devices.html and converted to this interface

```typescript
interface IDeviceModelInfo {
  retailBranding: string;
  marketingName: string;
  device: string;
  model: string;
}
```

Example:

```typescript
import getDeviceList from "device-model-parser";

const deviceMap = getDeviceList();

console.log(deviceMap.get("SM-G980F")?.marketingName);
```

Output: \
![image](https://user-images.githubusercontent.com/102170101/233596880-59101a11-7151-40c5-a64a-3de342810ef2.png)
