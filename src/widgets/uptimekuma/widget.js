import genericProxyHandler from "utils/proxy/handlers/generic";

const widget = {
  api: "{url}/api/{endpoint}/{slug}",
  proxyHandler: genericProxyHandler,

  mappings: {
    status_page: {
      endpoint: "status",
    },
    heartbeat: {
      endpoint: "status/heartbeat",
    },
  },
};

export default widget;
