export var GET_ALL_DOCTORS;

export function getAllDoctors(name) {
  return {
    type: GET_ALL_DOCTORS,
    name
  };
}
