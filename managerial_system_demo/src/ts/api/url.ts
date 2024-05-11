const baseUrl = () => {
  const host = window.location.hostname;
  const port = "5000";
  const protocol = window.location.protocol;
  return protocol + "//" + host + ":" + port;
};

export default baseUrl();