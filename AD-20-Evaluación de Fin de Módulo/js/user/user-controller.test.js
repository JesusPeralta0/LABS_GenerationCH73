const UserController = require("./user-controller");
const User = require("./user");

let userController;
let user1;
let user2;

beforeEach(() => {
  userController = new UserController();
  user1 = new User(1234, "Santiago", "santiago@generation.org");
  user2 = new User(5678, "Ana", "ana@generation.org");
});

// add(): usuario que no está en la lista
test('add user to userController', () => {
  expect(userController.getUsers()).not.toContain(user1);
  userController.add(user1);
  expect(userController.getUsers()).toContain(user1);
});

// remove(): usuario que no está en la lista
test('remove user that is not in the list', () => {
  userController.add(user1);
  userController.remove(user2); // user2 nunca se agregó
  expect(userController.getUsers()).toEqual([user1]);
});

// findByEmail(): 2 pruebas
test('findByEmail returns the user with that email', () => {
  userController.add(user1);
  userController.add(user2);
  expect(userController.findByEmail("ana@generation.org")).toBe(user2);
});

test('findByEmail returns undefined if the email does not exist', () => {
  userController.add(user1);
  expect(userController.findByEmail("nadie@generation.org")).toBeUndefined();
});

// findById(): 2 pruebas
test('findById returns the user with that id', () => {
  userController.add(user1);
  userController.add(user2);
  expect(userController.findById(1234)).toBe(user1);
});

test('findById returns undefined if the id does not exist', () => {
  userController.add(user1);
  expect(userController.findById(9999)).toBeUndefined();
});

