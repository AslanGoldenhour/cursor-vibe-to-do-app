# Test-Driven Development Workflow

- Always write tests before implementing a new feature or making changes to existing code.
- Target a minimum 80% code coverage for all new code, with critical paths having 100% coverage.
- Store unit tests alongside the code they test with a `.test.tsx` or `.test.ts` suffix.
- Focus integration tests on component interactions and end-to-end tests on critical user flows.
- All tests must pass before merging any PR. 