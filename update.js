// @ts-check
const csvtojson = require("csvtojson");
const { writeFile } = require("fs/promises");

async function getSupportedDevicesRawCsv() {
  const response = await fetch(
    "https://storage.googleapis.com/play_public/supported_devices.csv"
  );
  const responseText = Buffer.from(await response.arrayBuffer()).toString(
    "utf16le"
  );
  return responseText;
}

async function getSupportedDeviceJsonFromRawCsv(rawCsv) {
  return await csvtojson({ delimiter: "," }).fromString(rawCsv);
}

async function fetchAndStoreSupportedDevices() {
  const supported_devices_csv = await getSupportedDevicesRawCsv();

  const supported_devices_json = await getSupportedDeviceJsonFromRawCsv(
    supported_devices_csv
      .replace('Retail Branding', 'retailBranding')
      .replace('Marketing Name', 'marketingName')
      .replace('Device', 'device')
      .replace('Model', 'model')
  );

  await writeFile("deviceList.json", JSON.stringify(supported_devices_json));
}

fetchAndStoreSupportedDevices().catch(console.error);
