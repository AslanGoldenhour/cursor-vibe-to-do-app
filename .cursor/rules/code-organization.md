# Code Organization Rules

- Files should never exceed 300 lines. When a file approaches this limit, suggest refactoring it into smaller, more focused modules.
- Functions should be simple and not exceed 30 lines. If a function grows beyond this limit, refactor it into smaller functions.
- Follow the Single Responsibility Principle for all components and functions.
- Keep cyclomatic complexity low by avoiding deeply nested conditionals and loops.
- Prefer pure functions where possible to minimize side effects and improve testability.
- Use descriptive naming for variables, functions, and components. 