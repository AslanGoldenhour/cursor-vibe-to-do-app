# Cursor Vibe Todo App - Development Rules

This document outlines our development rules and best practices to ensure code quality, maintainability, and readability.

## File Size Limit

- **Maximum of 300 lines per file**: When a file approaches or exceeds 300 lines, it should be refactored and split into smaller, more focused modules.
- **Modularize related functionality**: Group related components, utilities, or hooks into their own directories with clear naming conventions.

## Function Simplicity

- **Single Responsibility Principle**: Each function should do one thing and do it well.
- **Maximum of 30 lines per function**: If a function grows beyond this limit, consider refactoring it into smaller functions.
- **Limit complexity**: Keep cyclomatic complexity low by avoiding deeply nested conditionals and loops.
- **Use pure functions where possible**: Minimize side effects to make code more predictable and testable.
- **Descriptive naming**: Function names should clearly describe what they do.

## Test-Driven Development

- **Write tests before implementation**: Tests should be written before implementing a new feature or making changes to existing code.
- **Test coverage targets**:
  - Minimum 80% code coverage for all new code
  - Critical paths should have 100% coverage
- **Test organization**: 
  - Unit tests should be stored alongside the code they test with a `.test.tsx` or `.test.ts` suffix
  - Integration tests should focus on component interactions
  - End-to-end tests should validate critical user flows

## Code Reviews

- **Enforce these standards in code reviews**: Reviewers should ensure these guidelines are followed
- **No PR may be merged without passing tests**: All tests must pass before a PR can be merged
- **Document exceptions**: If an exception to these rules is necessary, document the reason why

## Additional Best Practices

- **Use TypeScript**: Always use proper TypeScript types and interfaces
- **Comment complex logic**: Any complex logic should be well-commented
- **Keep dependencies updated**: Regularly update dependencies to avoid security issues
- **Consistent formatting**: Use ESLint and Prettier to ensure consistent code formatting

---

These rules help maintain code quality and ensure the application remains maintainable as it grows. 