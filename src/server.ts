import { createServer, Model } from "miragejs";

type Coordinates = {
  latitude: number;
  longitude: number;
};

type Vehicle = {
  identifier: string;
  license_plate: string;
  tracker_serial_number: string;
  coordinates: Coordinates;
};

export function makeServer({ environment = "test" } = {}) {
  return createServer({
    environment,

    models: {
      vehicle: Model.extend<Partial<Vehicle>>({}),
    },

    routes() {
      this.namespace = "api";

      this.get("/vehicles", (schema) => {
        return schema.all("vehicle");
      });

      this.post("/vehicles", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        return schema.create("vehicle", attrs);
      });
    },

    seeds(server) {
      server.create("vehicle", {
        identifier: "Vehicle 1",
        license_plate: "AAA-9A99",
        tracker_serial_number: "A0000000",
        coordinates: {
          latitude: -25.43247,
          longitude: -49.27845,
        },
      } as object);
    },
  });
}
