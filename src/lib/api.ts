/**
 * Ultra-lightweight native fetch wrapper API Utility.
 * Prioritizes speed and minimal footprint over bulky modules like Axios.
 */
export const API_BASE_URL = "https://celebstalks.pythonanywhere.com";

interface FetchOptions extends RequestInit {
  data?: any;
}

export async function fetchApi<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { data, headers: customHeaders, ...customConfig } = options;

  // Ensure endpoint starts with a slash
  const safeEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const url = `${API_BASE_URL}${safeEndpoint}`;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...customHeaders,
  };

  const config: RequestInit = {
    // Automatically default to POST if there is payload data
    method: data ? "POST" : "GET",
    headers,
    ...customConfig,
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  const response = await fetch(url, config);

  if (!response.ok) {
    let errorMsg = `API Request Failed: ${response.status} ${response.statusText}`;
    try {
      const errorData = await response.json();
      if (errorData?.message) errorMsg = errorData.message;
    } catch {
      // Endpoint returned non-JSON error
    }
    throw new Error(errorMsg);
  }

  // Handle empty bodies gracefully
  const text = await response.text();
  return (text ? JSON.parse(text) : null) as T;
}
