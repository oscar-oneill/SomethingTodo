/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      status
      dueDate
      itemType
      nameType
      dateType
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        status
        dueDate
        itemType
        nameType
        dateType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const todosByStatus = /* GraphQL */ `
  query TodosByStatus(
    $itemType: String
    $status: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    todosByStatus(
      itemType: $itemType
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        status
        dueDate
        itemType
        nameType
        dateType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const todosByName = /* GraphQL */ `
  query TodosByName(
    $nameType: String
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    todosByName(
      nameType: $nameType
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        status
        dueDate
        itemType
        nameType
        dateType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const todosByDueDate = /* GraphQL */ `
  query TodosByDueDate(
    $dateType: String
    $dueDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    todosByDueDate(
      dateType: $dateType
      dueDate: $dueDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        status
        dueDate
        itemType
        nameType
        dateType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
