# device-model-parser

Converts the model of Android devices into the extended name

Example: \
```typescript
import getDeviceList from 'device-model-parser'

const deviceMap = getDeviceList()

console.log(deviceMap.get('SM-G980F')?.marketingName)
```

Output: \
![image](https://user-images.githubusercontent.com/102170101/233596880-59101a11-7151-40c5-a64a-3de342810ef2.png)
