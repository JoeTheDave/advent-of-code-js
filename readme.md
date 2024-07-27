# Advent of Code

https://adventofcode.com/
https://projecteuler.net/archives

## Scripts

- `npm run create` - Will prompt you for problem details and generate solution boilerplate
- `npm run exec` - Will execute the solution function in the most recently generated problem directory
- `npm run change` - Will prompt you for problem details and switch execution directory
- `npm run report` - Will generate a simple report showing which problems have been solved vs which have been started and not solved.

## Debugging a solution

Run the `Debug Terminal` configuration
This will open up a new debug terminal
Set breakpoints as needed
run `npm run exec yyyy dd` to debug the solution file for the target day
When finished, kill the debug terminal

### TODO

- [ ] Test coverage?
- [ ] Migrate all legacy solutions into new project
- [ ] Better solution execution switcher script
- [ ] Improved completion report?
- [ ] Visualizations script that will launch a server, load the solution ts file call a function by convention
