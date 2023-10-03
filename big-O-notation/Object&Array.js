const person = {
  firstName: 'Bruce',
  lastName: 'Wayne',
};
// Time Complexity is constant for an Insert, Remove or an Access
// Time Complexity is linear for a Search

Object.keys(); // Return an array of all the keys
Object.values(); // Return an array of all the values on object
Object.entries(); // All have a linear Time Complexity

// ****************************** //

const odd = [1, 3, 5, 7, 9];
// Time Complexity is constant for an Insert or Remove from the end of the array

// Time Complexity is linear for an Insert or Remove from the beginning of the array

// It's because the index has tpp be reset for every element of the array

Push / Pop; // Time Complexity is constant

Shift / unshift / concat / slice / splice; // Time Complexity are linear

forEach / map / filter / reduce; // Time Complexity are also linear
