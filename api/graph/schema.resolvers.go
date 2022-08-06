package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"neostack/graph/generated"
	"neostack/graph/model"
	"neostack/service"
)

// Login is the resolver for the login field.
func (r *authOpsResolver) Login(ctx context.Context, obj *model.AuthOps, email string, password string) (interface{}, error) {
	return service.UserLogin(ctx, email, password)
}

// Register is the resolver for the register field.
func (r *authOpsResolver) Register(ctx context.Context, obj *model.AuthOps, input model.NewUser) (interface{}, error) {
	return service.UserRegister(ctx, input)
}

// Auth is the resolver for the auth field.
func (r *mutationResolver) Auth(ctx context.Context) (*model.AuthOps, error) {
	return &model.AuthOps{}, nil
}

// User is the resolver for the user field.
func (r *queryResolver) User(ctx context.Context, id string) (*model.User, error) {
	user, err := service.UserGetByID(ctx, id)
	if err != nil {
		return nil, err
	}
	return &model.User{ID: user.ID, Name: user.Name, Email: user.Email}, nil
}

// Protected is the resolver for the protected field.
func (r *queryResolver) Protected(ctx context.Context) (string, error) {
	return "Success", nil
}

// AuthOps returns generated.AuthOpsResolver implementation.
func (r *Resolver) AuthOps() generated.AuthOpsResolver { return &authOpsResolver{r} }

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type authOpsResolver struct{ *Resolver }
type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
