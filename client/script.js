// Configuration:
// - choose client data provider
const clientDataProviderURL = process.env.DATA_PROVIDER_URL || 'https://ipapi.co/json/';
// - change this URL to any server you want that will listen to the request with collected user data
const goodBoiURL = process.env.SERVER_URL || 'http://localhost:5000/';


const giveMeSomeData = async () => {
  const response = await fetch(clientDataProviderURL);
  const dataObject = await response.json();
  return Object.assign(dataObject, { requestType: "IP_DATA" });
};

const sendDataToGoodBoi = (data, url) => fetch(url, {
  method: 'post',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});

const superInterestingDataCollector = async () => {
  const data = await giveMeSomeData();
  sendDataToGoodBoi(data, goodBoiURL);
};

window.onload = superInterestingDataCollector();
