import toast from "react-hot-toast";
import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_SHIPSTATION_KEY;
const apiSecret = process.env.NEXT_PUBLIC_SHIPSTATION_SECRET;
const baseUrl = "https://ssapi.shipstation.com";
const headers = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString(
      "base64"
    )}`,
  },
};

export const getCarriers = async () => {
  const url = `${baseUrl}/carriers`;

  try {
    const { data } = await axios.get(url, headers);
    // toast.success(`success`);
    return data;
  } catch (error) {
    toast.error(`Error fetching carriers`);
    return [];
  }
};

export const createShipment = async (data) => {
  const { carrierId, serviceCode, weight, ...shipmentData } = data;

  const url = `https://ssapi.shipstation.com/shipments/create`;
  const body = JSON.stringify({
    carrierId,
    serviceCode,
    weight: {
      value: weight,
      unit: "ounce", // Or 'gram', 'kilogram', or 'pound'
    },
    ...shipmentData,
  });

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString(
        "base64"
      )}`,
    },
    body,
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error creating shipment: ${await response.text()}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating shipment" });
  }
};
