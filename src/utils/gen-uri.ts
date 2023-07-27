interface Params {
  username: string;
  password: string;
  env: string;
  port: string | number;
}

export default function genUri({ username, password, env, port }: Params) {
  const encoded_username = encodeURIComponent(username).replace(/!/g, "%21");
  const encoded_password = encodeURIComponent(password).replace(/!/g, "%21");
  if (env === "development") {
    return `mongodb://127.0.0.1:2701/presidents-api`;
  } else if (env === "production") {
    return `mongodb+srv://${encoded_username}:${encoded_password}@cluster0.orpih.mongodb.net/presidents-api?retryWrites=true&w=majority`
  } else {
    throw "Must specify a node environment in order to generate Mongo URI ... ";
  }
}
