/*
  - Define function addOne 
  -- addOne takes an argument which is a number 
  -- it adds 1 to the argument 
  -- then returns the result 
*/
export function addOne(arg: number) {
  const addedOne = arg + 1;
  return addedOne;
}

/*
  - Definition of doSomething 
  -- Takes no arguments 
  -- Has a variable (memory location) with 1 stored in it 
  -- It calls addOne and stores the returned result in another variable 
  -- It then logs out the result (In this case it would always be 2)
*/
export function doSomething() {
  const one = 1;
  const two = addOne(one);

}

// NOTE: 'export' allows these functions to be imported and called in opther files
