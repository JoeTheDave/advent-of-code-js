# Advent of Code

https://adventofcode.com/

If you fork this project for your own use when solving Advent of Code puzzles, please read this readme file thoroughly.

## Installation

```sh
npm i
cp .env.example .env
```

In the resulting .env file, you need to replace the value for `sessionId` with your actual advent-of-code session cookie value

You can obtain your session cookie value from chrome dev tools Application tab
![image](https://user-images.githubusercontent.com/1302467/205341797-fe96b2b0-e9e6-4b7d-b7e5-717df446fe7f.png)

You will want to run the delete-default-solutions script to start fresh and not have any of my solutions present in your project.

You may also want to change the value of `solutions_dir` by default it is set to `my-solutions`. This will designate the directory in which solution files are created when you run the `generate-solution-files` script (see below). Make sure not to set this value to `solutions` as that is the name of the directory that is deleted when running the `delete-default-solutions` script.

## TODO

- [ ] Handle error page when you go to a visualization that doesn't exist - route back to index

## Automation Scripts

`npm run generate-solution-files yy dd`

- This will generate a solution directory for the specified year and day as well as the following files...

- A data.ts file containing your personalized input data (pulled using your session cookie) as well as test data pulled from the project day. The test data for any given day is in unreliable locations within the text, so this data can sometimes be erroneous. Please double check that the generated test data matches what is expected.

- A solution.ts file that is setup to pull data from the data.ts file and has stubs for part1 and part2 functions. This file can be run with `npm run exec yy dd` (see explanation below)

- A solutions.test.ts file that contains two stubbed in tests, one for part1 and one for part2. Initially these tests will fail but you can update the expected values once you solve the part1 and part2 puzzles. You can also add any other tests to these files that you want.

- A Visualization.tsx that is useful for building visuals of complex data models to help you debug and reason about your solution. This file exports a react component that can be loaded and viewed by running `npm run dev`

- This can be used to generate solution files from the current year or archived years all the way back to 2015.

`npm run exec yy dd`

- This will execute the default exported function from the solution.ts file of the specified day.
- The yy (year) is an optional parameter. If not provided it will default to 22 and look for the corresponding day.
- The d (d) parameter is required.
- The exec script will run the ts file using ts-node. It also logs performance detials and the value returned by the function.

`npm run delete-solution yy dd`

- Remove generated solution files for a given year and day. It's important to use this script instead of just deleting the solution directory directly because there is also a file, `~/app/lib/getVisualizationComponent.ts`, that is auto-generated every time you run the `generate-solution-files` script that enables the visualizations to work properly. This file needs to be updated if solution files are removed.

`npm run delete-default-solutions`

- Deletes the solution directory that currently exists in the project

`npm run dev`

- Starts the Remix application that loads the solution visualization components

`npm run test`

- Run Jest tests
