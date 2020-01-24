import AuthStore from "../stores/auth_store";

export function newTodo() {
    return {
        Id: -1,
        IsDone: 0,
        IsDeleted: 0,
        Content: '',
        TodoDate: Date.now().toString(),
        TodoUser: AuthStore.name,
        CreatedDate: Date.now().toString(),
        CreatedUser: AuthStore.name,
        UpdatedDate: Date.now().toString(),
        UpdatedUser: AuthStore.name,
    };
}